module "mongodb_cluster" {
  source          = "../modules/mongodb-cluster"
  atlas_public_key  = var.atlas_public_key
  atlas_private_key = var.atlas_private_key
  atlas_org_id      = var.atlas_org_id
  environment       = "dev"
  region            = "East US"  # Specify a region supported by MongoDB Atlas for M0
}
