//#region Module
const redis = require("./redisCache");
const memCache = require("./memCache");
//#endregion

module.exports = {
  //#region Add Cache key 
  Add: (key, value, expiry = 0, isKeyPrefixRequired = true) => {
    try {
      key = AddKeyPrefix(key, isKeyPrefixRequired);

      if(process.env.IsRedisEnabled)
        return redis.Add(key, value, expiry);

      if(process.env.IsMemCacheEnabled)
        return memCache.Add(key, value, expiry);

      return false;  

    } catch (err) {
      return false;
    }
  },
  //#endregion

  //#region Get Cache Key
  Get: async (key, isKeyPrefixRequired = true) => {
    try {
      key = AddKeyPrefix(key, isKeyPrefixRequired);

      if(process.env.IsRedisEnabled)
        return await redis.Get(key);

      if(process.env.IsMemCacheEnabled)
        return await memCache.Get(key);

      return null;

    } catch (err) {
      return null;
    }
  },
  //#endregion

  //#region Delete Cache Key
  Delete: (key, isKeyPrefixRequired = true) => {
    try {
      key = AddKeyPrefix(key, isKeyPrefixRequired);

      if(process.env.IsRedisEnabled)
        redis.Delete(key);

      if(process.env.IsMemCacheEnabled)
        memCache.Delete(key);

    } catch (err) { }
  },
  //#endregion

  //#region replace
  Replace: (key, value, expiry = 0, isKeyPrefixRequired = true) => {
    try {
      key = AddKeyPrefix(key, isKeyPrefixRequired);

      if(process.env.IsRedisEnabled)
        return redis.Replace(key, value, expiry);

      if(process.env.IsMemCacheEnabled)
        return memCache.Replace(key, value, expiry);

      return false;

    } catch (err) {
      return false;
    }
  },
  //#endregion

  //#region ContainsKey
  ContainsKey: async (key, isKeyPrefixRequired = true) => {
    try {
      key = AddKeyPrefix(key, isKeyPrefixRequired);

      if(process.env.IsRedisEnabled)
        return await redis.ContainsKey(key);

      if(process.env.IsMemCacheEnabled)
        return await memCache.ContainsKey(key);

      return false;

    } catch (err) {
      return false;
    }
  },
  //#endregion

  //#region FlushAll all keys
  FlushAll: () => {
    try {

      if(process.env.IsRedisEnabled)
        return redis.FlushAll();

      if(process.env.IsMemCacheEnabled)
        return memCache.FlushAll();

    } catch (err) { }
  },
  //#endregion
};

//#region AddKeyPrefix
function AddKeyPrefix(key, isKeyPrefixRequired) {
  if (isKeyPrefixRequired) {
    key = process.env.CachePrefix + key;
  }
  return key;
}
//#endregion
