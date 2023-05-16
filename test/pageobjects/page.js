/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path, spec) {
        if (spec == 'demoqa') {
            return browser.url(`https://demoqa.com/${path}`)
        } else if (spec == 'ultimateqa') {
            return browser.url(`https://ultimateqa.com/${path}`)
        }
        
    }
}
