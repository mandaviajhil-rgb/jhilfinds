import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type Product = {
    title : Text;
    description : Text;
    imageUrl : Text;
    amazonLink : Text;
    pinterestLink : Text;
    category : Text;
    isFeatured : Bool;
  };

  module Product {
    public func compare(a : Product, b : Product) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  let products = Map.empty<Text, Product>();

  public shared ({ caller }) func addProduct(title : Text, description : Text, imageUrl : Text, amazonLink : Text, pinterestLink : Text, category : Text, isFeatured : Bool) : async () {
    if (products.containsKey(title)) { Runtime.trap("Product with this title already exists") };
    let product : Product = {
      title;
      description;
      imageUrl;
      amazonLink;
      pinterestLink;
      category;
      isFeatured;
    };
    products.add(title, product);
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    let filtered = products.values().toArray().filter(
      func(product) { product.category == category }
    );
    filtered.sort();
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product] {
    let filtered = products.values().toArray().filter(
      func(product) { product.isFeatured }
    );
    filtered.sort();
  };

  public query ({ caller }) func getProduct(title : Text) : async Product {
    switch (products.get(title)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  system func preupgrade() {
    let initialProducts : [Product] = [
      {
        title = "Boho Wall Hanging";
        description = "Handwoven bohemian wall decor piece for living room or bedroom.";
        imageUrl = "https://example.com/boho_wall_hanging.jpg";
        amazonLink = "https://amazon.com/bohowallhanging";
        pinterestLink = "https://pinterest.com/bohoideas";
        category = "Home Decor";
        isFeatured = true;
      },
      {
        title = "Smart Coffee Maker";
        description = "WiFi enabled coffee maker with programmable brewing";
        imageUrl = "https://example.com/smart_coffee_maker.jpg";
        amazonLink = "https://amazon.com/smartcoffeemaker";
        pinterestLink = "https://pinterest.com/kitchenideas";
        category = "Kitchen";
        isFeatured = false;
      },
      {
        title = "Memory Foam Pillow";
        description = "Ergonomic contour pillow for better sleep and neck support";
        imageUrl = "https://example.com/memory_foam_pillow.jpg";
        amazonLink = "https://amazon.com/memoryfoampillow";
        pinterestLink = "https://pinterest.com/bedroomideas";
        category = "Bedroom";
        isFeatured = false;
      },
      {
        title = "Standing Desk Converter";
        description = "Adjustable desktop riser for healthier work posture";
        imageUrl = "https://example.com/standing_desk_converter.jpg";
        amazonLink = "https://amazon.com/standingdeskconverter";
        pinterestLink = "https://pinterest.com/officeideas";
        category = "Office";
        isFeatured = true;
      },
      {
        title = "Solar Garden Lights";
        description = "Eco-friendly LED pathway lights for outdoor spaces";
        imageUrl = "https://example.com/solar_garden_lights.jpg";
        amazonLink = "https://amazon.com/solargardenlights";
        pinterestLink = "https://pinterest.com/outdoorideas";
        category = "Outdoor";
        isFeatured = false;
      },
      {
        title = "Women's Maxi Dress";
        description = "Flowy summer dress with floral print design";
        imageUrl = "https://example.com/maxi_dress.jpg";
        amazonLink = "https://amazon.com/maxidress";
        pinterestLink = "https://pinterest.com/fashiontrends";
        category = "Fashion";
        isFeatured = false;
      },
      {
        title = "Facial Cleansing Brush";
        description = "Waterproof sonic brush for deep facial exfoliation";
        imageUrl = "https://example.com/facial_brush.jpg";
        amazonLink = "https://amazon.com/facialbrush";
        pinterestLink = "https://pinterest.com/beautytips";
        category = "Beauty";
        isFeatured = true;
      },
      {
        title = "Wireless Earbuds";
        description = "Bluetooth 5.0 waterproof sport earbuds with charging case";
        imageUrl = "https://example.com/wireless_earbuds.jpg";
        amazonLink = "https://amazon.com/wirelessearbuds";
        pinterestLink = "https://pinterest.com/techtips";
        category = "Tech";
        isFeatured = true;
      },
    ];

    for (product in initialProducts.values()) {
      products.add(product.title, product);
    };
  };
};
