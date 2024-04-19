const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const app = express();
app.use(express.json());

// Configurer la connexion à PostgreSQL
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Définir le modèle d'utilisateur
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 50]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 255]
    }
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Méthode pour générer un jeton d'authentification
User.prototype.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this.id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
}

// Fonction pour valider un utilisateur
function validateUser(user: any) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  });

  return schema.validate(user);
}

// Routes pour les utilisateurs
app.post('/api/users', async (req, res) => {
  // Validation de la requête
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Création d'un nouvel utilisateur
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send('Une erreur est survenue lors de la création de l\'utilisateur.');
  }
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}...`));
