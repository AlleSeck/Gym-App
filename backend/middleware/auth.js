const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Routes to exclude
  const excludedRoutes = ['/api/auth', '/api/users'];

  // If the route is excluded, move to the next middleware
  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  // Check if token exists in the header
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded; 
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}
