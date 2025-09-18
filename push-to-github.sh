#!/bin/bash

# x3o.ai Marketplace GitHub Push Script
# Run this after creating the GitHub repository at: https://github.com/x3o-ai/marketplace

echo "🚀 Pushing x3o.ai marketplace to GitHub..."
echo "Make sure you've created the repository: https://github.com/x3o-ai/marketplace"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "x3o-styled.html" ]; then
    echo "❌ Error: Not in x3o-marketplace directory"
    echo "Run: cd x3o-marketplace"
    exit 1
fi

echo "✅ Verified: In x3o-marketplace directory"
echo ""

# Check if origin already exists and remove it
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔄 Removing existing origin..."
    git remote remove origin
fi

echo "📡 Adding GitHub remote origin..."
git remote add origin https://github.com/x3o-ai/marketplace.git

echo "🔄 Setting main branch..."
git branch -M main

echo "⬆️ Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS: x3o.ai marketplace pushed to GitHub!"
    echo "🌐 Repository: https://github.com/x3o-ai/marketplace"
    echo "📋 View the GITHUB_SETUP_GUIDE.md for next steps"
    echo ""
    echo "Next Steps:"
    echo "1. Configure repository settings on GitHub"
    echo "2. Set up GitHub Pages for deployment"
    echo "3. Point x3o.ai domain to your deployment"
else
    echo ""
    echo "❌ Error: Push failed. Make sure:"
    echo "1. You've created the GitHub repository"
    echo "2. You have push permissions"
    echo "3. Your Git credentials are configured"
fi

echo ""
read -p "Press Enter to continue..."