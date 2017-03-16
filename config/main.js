module.exports = {  
  // Database connection information
  'database': process.env.MONGODB_URI || 'mongodb://localhost/customer',    
  // Setting port for server
  'port': process.env.PORT || 5000    
}