#!/bin/bash
# Usage: ./switch-client.sh [forthlines|guwahati]
# Re-links Vercel to the correct project when switching branches.

BRANCH=$(git branch --show-current)
PROJECT=${1:-$BRANCH}

case "$PROJECT" in
  main|forthlines)
    git checkout main
    vercel link --project forthlines-health --yes
    echo "✓ Linked to forthlines-health → forthlines-health.vercel.app"
    ;;
  guwahati|dr-biswas)
    git checkout guwahati
    vercel link --project dr-biswas-ayurveda --yes
    echo "✓ Linked to dr-biswas-ayurveda → dr-biswas-ayurveda.vercel.app"
    ;;
  *)
    echo "Usage: ./switch-client.sh [forthlines|guwahati]"
    echo "  forthlines → main branch, forthlines-health.vercel.app"
    echo "  guwahati   → guwahati branch, dr-biswas-ayurveda.vercel.app"
    exit 1
    ;;
esac
