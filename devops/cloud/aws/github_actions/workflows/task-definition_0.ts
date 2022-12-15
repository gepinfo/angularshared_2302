module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "gepitemtagsmanager-2302",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-angularshared-2302-gepitemtagsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8006",
                    "protocol": "tcp",
                    "hostPort": "8006"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@angularshared.local:27017/angularshared_2302?authSource=admin"},{"name":"MONGO_DOMAIN","value":"angularshared.local"},{"name":"CAMUNDAPOD_URL","value":"http://angularshared.local:8080"},{"name":"SECURITYURL","value":"http://angularshared.local:8003"},{"name":"AUTHPROXYURL","value":"http://angularshared.local:8001"},{"name":"ADMINURL","value":"http://angularshared.local:8004"},{"name":"CAMUNDAURL","value":"http://angularshared.local:8002"},{"name":"GCAMURL","value":"http://angularshared.local:8007"},{"name":"APIGATEWAY","value":"http://angularshared.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "angularshared"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/angularshared",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "gepitemtagsmanager-2302",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-angularshared-2302-gepitemtagsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8006",
                    "protocol": "tcp",
                    "hostPort": "8006"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@angularshared.local:27017/angularshared_2302?authSource=admin"},{"name":"MONGO_DOMAIN","value":"angularshared.local"},{"name":"CAMUNDAPOD_URL","value":"http://angularshared.local:8080"},{"name":"SECURITYURL","value":"http://angularshared.local:8003"},{"name":"AUTHPROXYURL","value":"http://angularshared.local:8001"},{"name":"ADMINURL","value":"http://angularshared.local:8004"},{"name":"CAMUNDAURL","value":"http://angularshared.local:8002"},{"name":"GCAMURL","value":"http://angularshared.local:8007"},{"name":"APIGATEWAY","value":"http://angularshared.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "angularshared"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/angularshared",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "test-2302",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-angularshared-2302-test:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@angularshared.local:27017/angularshared_2302?authSource=admin"},{"name":"MONGO_DOMAIN","value":"angularshared.local"},{"name":"CAMUNDAPOD_URL","value":"http://angularshared.local:8080"},{"name":"SECURITYURL","value":"http://angularshared.local:8003"},{"name":"AUTHPROXYURL","value":"http://angularshared.local:8001"},{"name":"ADMINURL","value":"http://angularshared.local:8004"},{"name":"CAMUNDAURL","value":"http://angularshared.local:8002"},{"name":"GCAMURL","value":"http://angularshared.local:8007"},{"name":"APIGATEWAY","value":"http://angularshared.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "angularshared"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/angularshared",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "angularshared",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "angularshared0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
