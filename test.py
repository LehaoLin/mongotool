import pymongo

# 建立到MongoDB的连接
client = pymongo.MongoClient('localhost', 27017)

# 创建或访问数据库
db = client['dbname']

# 创建或访问集合
collection = db['test']

# 插入单个文档
data = {'key': 'value'}
collection.insert_one(data)

# 插入多个文档
data_list = [{'key1': 'value1'}, {'key2': 'value2'}]
collection.insert_many(data_list)

# 查询单个文档
result = collection.find_one({'key': 'value'})
print(result)

# 查询多个文档
results = collection.find({'key': 'value'})
for result in results:
    print(result)

# 更新单个文档
collection.update_one({'key': 'value'}, {'$set': {'new_key': 'new_value'}})

# 更新多个文档
collection.update_many({'key': 'value'}, {'$set': {'new_key': 'new_value'}})

# 删除单个文档
collection.delete_one({'key': 'value'})

# 删除多个文档
collection.delete_many({'key': 'value'})

for doc in collection.find():
    print(doc)
