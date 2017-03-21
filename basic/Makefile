# Makefile for Kubernetes Cluster to host nginx 
#
ZONE=asia-east1-a
CLUSTER_NAME=k8demo
NUM_NODES=3

cluster:
	gcloud container clusters create ${CLUSTER_NAME} --zone=${ZONE} --num-nodes=${NUM_NODES} --quiet

all: cluster deploy svc	

clean:
	gcloud container clusters delete ${CLUSTER_NAME} --zone=${ZONE}  --quiet

# Deployment functions
deploy:
	kubectl create -f nginx-deployment.yaml

delete-deployment:
	kubectl delete -f nginx-deployment.yaml

# Service functions
svc:
	kubectl create -f nginx-service.yaml

delete-svc:	
	kubectl delete -f nginx-service.yaml