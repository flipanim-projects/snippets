# snippets
JavaScript snippets to make FlipAnim better, one snippet at a time

## Prerequisites
Before you can add these, you'll need an extension that can inject JavaScript into a page.

I use [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld), so the instructions will be towards that, though I think you can use Tampermonkey as well.

[this Firefox addon](https://addons.mozilla.org/en-CA/firefox/addon/javascript/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) seems to do the same thing

## How to add a snippet
- Navigate to the file you want to add to FlipAnim ([isFollowingYou](https://github.com/flipanim-projects/snippets/blob/main/isFollowingYou.js) | [linkifyComments](https://github.com/flipanim-projects/snippets/blob/main/linkifyComments.js))
- Copy its contents
- Go to [User JavaScript and CSS' settings page](chrome-extension://nbhcbdghjpllgmfilhnhkllmkecfmpld/options.html) 
  - **If you haven't added any snippets before**, click "Add a new site", then enter `flipanim.com` in the top bar
  - **If you have**, click flipanim.com in the list
- Paste the snippet in the left JS column
- If there's already code there, add it to the bottom 

## Alternatively...
You can copy and paste a snippet into the Inspect console (DevTools). That will only run once, so it's good for testing

## Screenshots
<img src="https://i.ibb.co/gwnfjmX/image.png" width="200">
<img src="https://i.ibb.co/R0MWc0s/image.png" height="50">
