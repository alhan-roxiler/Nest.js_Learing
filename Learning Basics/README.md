# 📘 NestJS Notes Summary

## 🗓 Study Plan
- **3 days per week** dedicated to learning NestJS.  
- **Resources:** Udemy (Hands-on practice).  
- **Prerequisites:**  
  - Node.js  
  - Yarn  

### Versions
| Tool | Version |
|------|----------|
| Node.js | v22.17.0 |
| npm | v10.9.2 |
| Yarn | v1.22.22 |

NestJS is **unopinionated** and **flexible**, allowing you to structure your app freely.

---

## ⚙️ Global Installation

### Command:
```bash
npm i -g @nestjs/cli
```

### Create a new project:
```bash
nest new <project-name>
```

---

### Package Files
- **package.json:** Contains application information and dependencies.  
- **package-lock.json:** Includes detailed dependency versions.

---

## 🧭 Controllers in NestJS

- **Controllers handle incoming HTTP requests** and send responses to the client.  
- Define routes using decorators such as:
  ```typescript
  @Get(), @Post(), @Put(), @Delete()
  ```
- They act as a **bridge between the client and the business logic (services)**.

---

## 🎯 Decorators

- Special functions that **add metadata to classes or methods**.
- Always start with the `@` symbol.  
  Example:
  ```typescript
  @Controller(), @Get()
  ```
- Tell NestJS **how to treat** a class or method.
- Used for:
  - Routing  
  - Dependency Injection  
  - Validation  
  - and more...

### Create a Controller via CLI:
```bash
nest g controller <name>
```

✅ Remember: The controller must be **registered inside a module**.

---

## 💡 Services in NestJS

- A **TypeScript class** containing reusable logic (like calculations, data access, etc.).  
- Used to write **business logic** in a clean and modular way.  
- Decorated with:
  ```typescript
  @Injectable()
  ```

### Create a Service via CLI:
```bash
nest g service <name>
```

Example:
```bash
nest g service product
```

---

## 🔁 Quick Recap

| Concept | Description |
|----------|--------------|
| **Controller** | Handles client requests and defines routes |
| **Service** | Contains business logic and reusable functions |
| **Decorator** | Adds metadata to classes and methods |
| **CLI Commands** | `nest new`, `nest g controller`, `nest g service` |

---
