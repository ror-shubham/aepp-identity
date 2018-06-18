const accountsPagePath = '//*[contains(@class, "accounts") and contains(@class, "modal-page")]'
const addButtonPath = '//*[contains(@class, "fixed-add-button")]'
const closeButtonPath = '//*[contains(@class, "ae-icon") and contains(@class, "_name_close")]'

exports.command = function (number = 1) {
  this
    .clickQuickId()
    .waitForElementPresent(accountsPagePath)
  for (let i = 0; i < number; i++) {
    this.click(accountsPagePath + addButtonPath)
  }
  const headerPath = `//*[contains(@class, "${this.options.desiredCapabilities.browserName === 'chrome-phone' ? 'phone' : 'desktop'}")]`
  this
    .click(accountsPagePath + headerPath + closeButtonPath)
    .waitForElementNotPresent(accountsPagePath)
}
