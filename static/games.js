//This would be a template for added more games to the site

class Game {
    constructor(title, year) {
        this._title = title;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    get year() {
        return this._year;
    }
}
