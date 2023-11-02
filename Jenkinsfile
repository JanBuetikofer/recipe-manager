pipeline {
    agent any

    stages {
        stage('verify tooling') {
            steps {
                sh '''
                    docker version
                    docker info
                    docker compose version
                    curl --version
                    jq --version
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Test123'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}