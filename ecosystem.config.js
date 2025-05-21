module.exports = {
  apps: [{
    name: 'personal-website',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
} 