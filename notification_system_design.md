# Stage 1

## REST API Design

### 1. Get all notifications

GET /notifications

Response

```json
{
  "notifications":[]
}
```

Status Code

```
200 OK
```

---

### 2. Get notification by ID

GET /notifications/{id}

Response

```json
{
"id":1,
"type":"Placement",
"message":"Google Hiring",
"isRead":false
}
```

---

### 3. Create Notification

POST /notifications

Request

```json
{
"type":"Placement",
"message":"Google Hiring",
"studentId":1001
}
```

Response

```json
{
"message":"Notification Created"
}
```

---

### 4. Mark Notification Read

PUT /notifications/{id}/read

Response

```json
{
"message":"Updated"
}
```

---

### 5. Delete Notification

DELETE /notifications/{id}

Response

```json
{
"message":"Deleted"
}
```

---

Headers

```
Authorization: Bearer Token
Content-Type: application/json
```
