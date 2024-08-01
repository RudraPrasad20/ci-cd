
## Getting Started

## ci
- create a new file build.yml inside of .github/workflows
- add some scripts according to your app 

## cd
## Containerize
- create dockerfile.app file inside of a new docker folder
- add nessesary scripts in that file ( according to your app )
- then copy that dockerfile.app file in to your root dir by naming Dockerfile ( cp  docker/dockerfile.app ./dockerfile )
- after all run this using docker - docker build -t my-next-app .      
- then run that app on docker port 3000 - docker run -p 3000:3000 mynextapp
- 
- then create a new repo in docker hub
- in the docker hub , go to my accounts then securitys , create a new access token ,  copy the secret
- now go to your github repo settings > secret variables > actions > create new repo secret
- give it a name and password of what you copied from the docker hub
- now create a new file in workflows folder - deploy.yml

