# Makefile for Kubernetes Cluster create/delete operations
#
ZONE=asia-east1-a
CLUSTER_NAME=k8demo
NUM_NODES=3

cluster:
	gcloud container clusters create ${CLUSTER_NAME} --zone=${ZONE} --num-nodes=${NUM_NODES} --quiet

clean:
	gcloud container clusters delete ${CLUSTER_NAME} --zone=${ZONE}  --quiet

