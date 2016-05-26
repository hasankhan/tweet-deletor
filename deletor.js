function deleteTweet()   
{  
    if (clickDeleteButton()) {
        confirmDelete();
    }
}

function undoRetweet()
{
    var undoBtn = document.querySelector('div.retweeted button.ProfileTweet-actionButtonUndo.js-actionButton.js-actionRetweet');
    if (undoBtn) {
        undoBtn.click();
    }
}

function undoLike()
{
    var undoBtn = document.querySelector('div.favorited button.ProfileTweet-actionButtonUndo.js-actionButton.js-actionFavorite');
    if (undoBtn) {
        undoBtn.click();
    }
}

function deleteAndUndo() {
    deleteTweet();
    undoRetweet();
    undoLike();
}

function clickDeleteButton()
{
    // find the delete option in context menu
    var deleteButtons = document.getElementsByClassName('js-actionDelete');
    if (deleteButtons && deleteButtons.length > 0) {
        // click the button
        deleteButtons[0].click();
        return true;
    }
    return false;
}

function confirmDelete()
{
    // wait for confirmation dialog to open  
    setTimeout(function(){  
        // confirm that we want to delete   
        var deleteBtn = document.querySelector('div#delete-tweet-dialog button.delete-action');
        if (deleteBtn) {
            deleteBtn.click();
        }
    }, 1000);
}

// delete a tweet every 10 seconds  
var deletor = setInterval(deleteAndUndo, 10000);

