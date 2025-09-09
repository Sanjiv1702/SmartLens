# SmartFinance — GitHub-ready Repo

This repository is a GitHub-ready scaffold for SmartFinance including a CI workflow.

## What changed
- Added `.gitignore`, `LICENSE`, and GitHub Actions CI workflow.
- CI checks: install & build frontend, install & run backend lint/tests (if any), install AI deps.

## How to use
1. Clone repository
2. Create `.env` files in the `backend/` and `frontend/` and `ai-service/` directories based on the provided examples.
3. Build and run locally or use `docker-compose up --build`.

## CI
See `.github/workflows/ci.yml` for the CI pipeline.
