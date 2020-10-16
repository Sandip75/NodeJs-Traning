//#region Module
const redisCache = require("redis");
//#endregion

//#region Vaiable
const client = redisCache.createClient({
  port: process.env.RedisPort,
  host: process.env.RedisServerList
});
//#endregion

module.exports = {
  //#region Add Cache Key with expiry
  Add: (key, value, expiryTime) => {
    try {
      client.set(key, JSON.stringify(value));
      if (expiryTime)
        client.expire(key, expiryTime);
      return true;
    } catch (err) {
      throw err;
    }
  },
  //#endregion

  //#region Get Cache Key
  Get: async key => {
    try {
      return JSON.parse((await client.get(key)));
    }
    catch (err) {
      throw err;
    }
  },
  //#endregion

  //#region Replace key
  Replace : (key, value, expiryTime) => {
    try {
        client.set(key, JSON.stringify(value));
        if (expiryTime)
          client.expire(key, expiryTime);
        return true;
      } catch (err) {
          throw err;
    }
  },
  //#endregion

  //#region Delete Cache Key
  Delete: key => {
    try {
      client.del(key);
    }
    catch (err) {
      throw err;
    }
  },
  //#endregion

  //#region Check key already exists or not
  ContainsKey: async key => {
    try {
      return (await client.exists(key));
    }
    catch (err) {
      throw err;
    }
  },
  //#endregion

  //#region FlushAll keys from all database
  FlushAll: () => {
    try {
      client.FlushAll();
    }
    catch (err) {
      throw err;
    }
  }
  //#endregion
};
