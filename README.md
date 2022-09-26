This repository runs BRC's website!

## Directory Structure

The important subset of the folder structure is as follows:
```
|-- src
|   |-- components  (reusable pieces that are included in multiple places on the website, like our event schedule for the season)
|   |-- images      (images that we display on the website)
|   |-- pages       (the actual pages of the website e.g. our meet pages, home page, competitive team page)
|-- static
```

## Updating text on a page

1. To update the text on one of the website pages, find its corresponding file under `src/pages` (or possibly a smaller component in `src/components`) and click on the file.
2. In the top-right corner, click the pencil icon ("Edit this file").
3. Make the desired changes.
4. Under the "Commit changes" section at the bottom of the page, enter a commit message (a succinct description of the change) in the first text box and, if necessary, a longer description in the larger text box.
5. Select the "Create a new branch for this commit and start a pull request" radio button.
   This will ask you for a branch name (an identifier for the under-development version of the website you are creating by making this change).
   It will usually make sense to name the branch similarly to how you named the commit.
   E.g. if you're updating posted practice times, a reasonable branch name might be `practice-times` and a reasonable commit message might be `update practice time information`.
6. Click "Commit changes"

For any other changes that are logically grouped with this change, go back to the directory overview by clicking `<> Code` in the top-left, select the branch you just made by clicking the button that says `master` and selecting the new branch, and repeat the steps above -- instead of making a new new branch in step 5, commit directly to the branch you made.

![image](https://user-images.githubusercontent.com/25730408/192358457-aedadd26-8e7f-4e20-9ce0-76cb0a72db4c.png)

Once you're done making this set of changes, navigate to the `Pull Requests` tab.
A bot will have commented a link to a preview of the updated site -- review this to make sure the changes look right.
Once everything looks good, click `Squash and merge` and your changes will be deployed to the site!
