# modules/mongodb-cluster/variables.tf

variable "atlas_public_key" {
  description = "MongoDB Atlas public API key"
  type        = string
}

variable "atlas_private_key" {
  description = "MongoDB Atlas private API key"
  type        = string
}

variable "atlas_org_id" {
  description = "MongoDB Atlas organization ID"
  type        = string
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
}

variable "region" {
  description = "Cloud provider region for Azure"
  type        = string
}
