resource "mongodbatlas_project" "project" {
  name   = "terraform-${var.environment}"
  org_id = var.atlas_org_id
}

resource "mongodbatlas_cluster" "cluster" {
  project_id = mongodbatlas_project.project.id
  name       = "terraform-cluster-${var.environment}"

  provider_name = "AZURE"  # Cloud provider is Azure
  region_name   = var.region  # Azure region, passed from environment-specific variables

  cluster_type  = "REPLICASET"
  disk_size_gb  = 5   # M0 free tier has a 5GB limit
  backup_enabled = false  # Backup is not available in the M0 tier

  mongo_db_major_version = "4.4"
  tier = "M0"
}
