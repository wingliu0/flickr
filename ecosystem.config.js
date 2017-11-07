module.exports = {
    apps: [{
        name: 'flickr',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ec2-user',
            host: 'ec2-54-249-96-69.ap-northeast-1.compute.amazonaws.com',
            key: '~/.ssh/temp_aws/temp_aws.pem',
            ref: 'origin/master',
            repo: 'git@github.com:wingliu0/flickr.git',
            path: '/home/ec2-user/server',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}