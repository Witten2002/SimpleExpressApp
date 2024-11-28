module.exports = {
  apps: [{
    name: "Express",
    script: "./src/server.js",
    env: {
      NODE_ENV: "production",
      PORT: 5001,
      BASE_URL: "/express/",
     }
  }]
}

