/* Object counter */

function Article() {
    Article.count++;

    this.created = new Date();
    Article.date = this.created;
}

// Static properties:
Article.count = 0;
Article.showStats = function() {
    console.log('Всего: ' + this.count + ', Последняя: ' + this.date);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)