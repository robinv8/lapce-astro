module.exports = {
  target: 'node',
  entry: './astro-language-server.js',
  output: {
    path: __dirname,
    filename: 'bin/nodeServer.js',
  }
};
