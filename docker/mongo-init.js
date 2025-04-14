db.createUser({
    user: "app_user",
    pwd: "senhaapp",
    roles: [
      { role: "readWrite", db: "emprestimos" },
      { role: "dbAdmin", db: "emprestimos" }
    ]
  });
  
  db.createCollection("items");
  db.createCollection("users");