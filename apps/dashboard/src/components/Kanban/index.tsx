import KanbanList from "./KanbanList";
import { container } from "./styles.css";

type KanbanProps = {};

function Kanban({}: KanbanProps) {
  return (
    <main className={container}>
      <KanbanList
        title="test"
        orders={[
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 02",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 01",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
        ]}
      />
      <KanbanList
        title="test2"
        orders={[
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 02",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 01",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
        ]}
      />
      <KanbanList
        title="test3"
        orders={[
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 02",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
          {
            // "_id": "63aca46f0bad38d54c0a2a94",
            table: "Table 01",
            products: [
              {
                product: {
                  // "_id": "63ac9b94388a5cc88ff34d55",
                  name: "Pizza 4 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9b94388a5cc88ff34d56"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9b94388a5cc88ff34d57"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9b94388a5cc88ff34d58"
                    },
                    {
                      name: "Brie",
                      // "_id": "63ac9b94388a5cc88ff34d59"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 4,
                // "_id": "63aca46f0bad38d54c0a2a95"
              },
              {
                product: {
                  // "_id": "63ac9d1dba6dce043197e2c0",
                  name: "Pizza 3 Cheeses",
                  description: "Pizza with four cheeses",
                  imageUrl: "https://image.com.br/123.png",
                  price: 6050,
                  category: "63ac92852a60075cbcbfeaf3",
                  ingredients: [
                    {
                      name: "Mussarela",
                      // "_id": "63ac9d1dba6dce043197e2c1"
                    },
                    {
                      name: "Provolone",
                      // "_id": "63ac9d1dba6dce043197e2c2"
                    },
                    {
                      name: "Cheddar",
                      // "_id": "63ac9d1dba6dce043197e2c3"
                    },
                  ],
                  // "__v": 0
                },
                quantity: 1,
                // "_id": "63aca46f0bad38d54c0a2a96"
              },
            ],
            // "__v": 0
          },
        ]}
      />
    </main>
  );
}

export default Kanban;
