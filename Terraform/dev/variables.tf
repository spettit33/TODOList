variable "atlas_public_key" {
  description = "MongoDB Atlas public API key"
  type        = string
}

variable "atlas_private_key" {
  description = "MongoDB Atlas private API key"
  type        = string
  sensitive = true
}

variable "atlas_org_id" {
  description = "MongoDB Atlas organization ID"
  type        = string
}