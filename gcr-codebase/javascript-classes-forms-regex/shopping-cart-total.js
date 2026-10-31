class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        const couponPattern = /^(SAVE20|DISC10)$/;

        if (couponPattern.test(coupon)) {
            let discount = 0;

            if (coupon === "SAVE20") {
                discount = 20;
            } else if (coupon === "DISC10") {
                discount = 10;
            }

            const total = this.getTotal();
            const discountAmount = total * discount / 100;
            const finalTotal = total - discountAmount;

            console.log("Coupon Applied:", coupon);
            console.log("Discount:", discount + "%");
            console.log("Discount Amount: ₹" + discountAmount);
            console.log("Final Total: ₹" + finalTotal);
        } else {
            console.log("Invalid Coupon Code!");
        }
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 1);

console.log("Shopping Cart Items:");

cart.items.forEach(item => {
    console.log(
        item.name,
        "Price: ₹" + item.price,
        "Quantity: " + item.quantity
    );
});

console.log("Total Amount: ₹" + cart.getTotal());

cart.applyCoupon("SAVE20");