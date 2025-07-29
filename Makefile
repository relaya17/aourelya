.PHONY: help install dev build test lint clean docker-build docker-run docker-stop deploy

# Default target
help:
	@echo "Available commands:"
	@echo "  install     - Install dependencies"
	@echo "  dev         - Start development server"
	@echo "  build       - Build for production"
	@echo "  test        - Run tests"
	@echo "  lint        - Run linting"
	@echo "  clean       - Clean build files"
	@echo "  docker-build - Build Docker image"
	@echo "  docker-run  - Run Docker container"
	@echo "  docker-stop - Stop Docker container"
	@echo "  deploy      - Deploy to production"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "Starting development server..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Run tests
test:
	@echo "Running tests..."
	npm test

# Run linting
lint:
	@echo "Running linting..."
	npm run lint

# Clean build files
clean:
	@echo "Cleaning build files..."
	rm -rf dist/
	rm -rf build/
	rm -rf node_modules/

# Docker commands
docker-build:
	@echo "Building Docker image..."
	docker build -t slice-of-home .

docker-run:
	@echo "Running Docker container..."
	docker run -p 80:80 slice-of-home

docker-stop:
	@echo "Stopping Docker containers..."
	docker stop $$(docker ps -q --filter ancestor=slice-of-home)

# Docker Compose commands
docker-compose-up:
	@echo "Starting services with Docker Compose..."
	docker-compose up -d

docker-compose-down:
	@echo "Stopping services with Docker Compose..."
	docker-compose down

docker-compose-logs:
	@echo "Showing Docker Compose logs..."
	docker-compose logs -f

# Development with Docker Compose
dev-docker:
	@echo "Starting development environment with Docker Compose..."
	docker-compose --profile dev up -d

# Production with Docker Compose
prod-docker:
	@echo "Starting production environment with Docker Compose..."
	docker-compose --profile production up -d

# Database with Docker Compose
db-docker:
	@echo "Starting database with Docker Compose..."
	docker-compose --profile database up -d

# Cache with Docker Compose
cache-docker:
	@echo "Starting cache with Docker Compose..."
	docker-compose --profile cache up -d

# Deploy to production
deploy:
	@echo "Deploying to production..."
	npm run build
	# Add deployment commands here

# Security audit
audit:
	@echo "Running security audit..."
	npm audit

# Update dependencies
update-deps:
	@echo "Updating dependencies..."
	npm update

# Check for outdated packages
outdated:
	@echo "Checking for outdated packages..."
	npm outdated

# Format code
format:
	@echo "Formatting code..."
	npx prettier --write .

# Type check
type-check:
	@echo "Running TypeScript type check..."
	npx tsc --noEmit

# Bundle analysis
analyze:
	@echo "Analyzing bundle..."
	npm run build
	npx vite-bundle-analyzer dist

# Performance check
perf:
	@echo "Running performance check..."
	npm run build
	npx lighthouse http://localhost:8080 --output=html --output-path=./lighthouse-report.html

# Help for Docker
docker-help:
	@echo "Docker commands:"
	@echo "  docker-build     - Build Docker image"
	@echo "  docker-run       - Run Docker container"
	@echo "  docker-stop      - Stop Docker container"
	@echo "  dev-docker       - Start development with Docker"
	@echo "  prod-docker      - Start production with Docker"
	@echo "  db-docker        - Start database with Docker"
	@echo "  cache-docker     - Start cache with Docker"

# Help for development
dev-help:
	@echo "Development commands:"
	@echo "  install          - Install dependencies"
	@echo "  dev              - Start development server"
	@echo "  build            - Build for production"
	@echo "  test             - Run tests"
	@echo "  lint             - Run linting"
	@echo "  clean            - Clean build files"
	@echo "  format           - Format code"
	@echo "  type-check       - Run TypeScript type check"
	@echo "  audit            - Run security audit"
	@echo "  update-deps      - Update dependencies"
	@echo "  outdated         - Check for outdated packages"
	@echo "  analyze          - Analyze bundle"
	@echo "  perf             - Run performance check"