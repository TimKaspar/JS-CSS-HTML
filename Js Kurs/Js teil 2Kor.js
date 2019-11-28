function Product(amount, unit, name) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;

    this.toString = function () {
        return this.amount + " " + this.unit + " " + this.name;
    }
}
function ShoppingList() {
    this.items = [];

    this.add = function (product) {
        this.items.push(product);
    }

    this.find = function (unit, name, product) {

        // go through items, check if an item has the same amount and unit, and if so: return it.
        for (var item of this.items) {
            if (item.name == name && item.unit == unit) {
                return item;
            }// when no item was found, return null;

        }
        return null;
    }
    this.delete = function(n){
        this.items.splice(n, 1);

        updateView();
    }

}

var shoppingList = new ShoppingList();

function init() {
    shoppingList.add(new Product(1, "l", "Milch"));
    shoppingList.add(new Product(200, "g", "Toblerone"));
    shoppingList.add(new Product(1.5, "kg", "Pasta"));
    shoppingList.add(new Product(3, "kg", "Zucker"));
    updateView();
}

function submit() {
    var number = document.getElementById("num").value;
    var unit = document.getElementById("unit").value;
    var product = document.getElementById("product").value;


    // check if we already have such a product (same unit and name) in the shopping list

    var item = shoppingList.find(unit, product);

    if (item !==null){// if we find such a product, we add the new amount to it
        item.amount = Number.parseInt(number) + Number.parseInt(item.amount);
    }else if (item == null){// otherwise we add a new product
        shoppingList.add(new Product(number, unit, product));
    }

    updateView();
}


function HTMLBuilder(node) {
    this.node = node;

    this.element = function (elementName) {
        var element = document.createElement(elementName);
        this.node.append(element);
        return new HTMLBuilder(element);
    }

    this.text = function (text) {
        this.node.append(document.createTextNode(text));
        return this;
    }

    this.attribute = function (key, value) {
        this.node.setAttribute(key, value);
        return this;
    }

    this.clear = function () {
        this.node.innerHTML = "";
        return this;
    }
}


function updateView(items, n) {

    var builder = new HTMLBuilder(list);
    builder.clear();
    var table = builder.element("table")
    var n = 0;
    for (var item of shoppingList.items) {

        var row = table.element("tr");
        row.element("td").text(item.amount);
        row.element("td").text(item.unit);
        row.element("td").text(item.name);
        row.element("td").element("button").attribute('onclick','shoppingList.delete('+n+')').text("delete");
        n++;

    }


}