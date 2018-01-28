pipeline {
    agent any
     
    // this tool will be used for all stages/steps except over-written
    tools {nodejs "carbon"}
     
    stages {
        stage('Build') {
            steps {
                tool name: 'carbon'
                sh 'npm install && ng build --prod'
            }
        }

        stage('deploy') {
            steps {
                tool name: 'carbon'
                sh 'forever --minUptime 1000 --spinSleepTime 1000 app.js'
            }
        }
    }
}