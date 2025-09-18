# GitHub Authentication Fix Guide

## 🔍 **Current Issue**
You're authenticated as `epicmotionSD` in GitHub, but your Git config shows:
- **Name**: Shawn Sonnier  
- **Email**: shawn@sonnierventure.com

This mismatch is causing permission issues with the `x3o-ai` organization.

## 🔧 **Fix Authentication**

### Option 1: Clear GitHub Credentials & Re-authenticate
```bash
# Clear stored credentials
git config --global --unset credential.helper
git config --global credential.helper manager

# Or for Windows Credential Manager:
cmdkey /delete:git:https://github.com

# Then try push again (will prompt for correct login)
cd x3o-marketplace
git push -u origin main
```

### Option 2: Use GitHub CLI (if installed)
```bash
# Logout current account
gh auth logout

# Login with correct account
gh auth login

# Then push
cd x3o-marketplace  
git push -u origin main
```

### Option 3: Use Personal Access Token
1. **Go to GitHub Settings**: https://github.com/settings/tokens
2. **Generate new token**:
   - Click "Generate new token (classic)"
   - Scopes: `repo`, `admin:org`
   - Copy the token

3. **Use token for this push**:
   ```bash
   cd x3o-marketplace
   git remote set-url origin https://YOUR_TOKEN@github.com/x3o-ai/marketplace.git
   git push -u origin main
   ```

### Option 4: Check Windows Credential Manager
1. **Open Windows Credential Manager**:
   - Search "Credential Manager" in Windows
   - Click "Windows Credentials"
   - Look for entries starting with `git:https://github.com`

2. **Remove GitHub entries** and try push again

## 🎯 **Quick Test: Check Current GitHub User**
```bash
# Test with curl to see who you're authenticated as
curl -H "Authorization: token YOUR_GITHUB_TOKEN" https://api.github.com/user
```

## ✅ **After Authentication Fix**
Once you're logged in with the correct account:

```bash
cd x3o-marketplace
git push -u origin main
```

## 🌐 **Success Indicators**
- ✅ Push completes without permission errors
- ✅ Repository visible at: https://github.com/x3o-ai/marketplace  
- ✅ All 23,410+ files uploaded
- ✅ x3o.ai marketplace live and ready for deployment

## 🚀 **Alternative: Create Under Correct Personal Account**
If you can't access `x3o-ai` org, create under your main account:
```bash
# Create repo at: https://github.com/[YOUR_MAIN_ACCOUNT]/x3o-marketplace
git remote set-url origin https://github.com/[YOUR_MAIN_ACCOUNT]/x3o-marketplace.git
git push -u origin main
```

Then transfer to organization later once permissions are sorted.