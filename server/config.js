const config = {
    mongourl:process.env.MONGO_URL || 'mongodb://sysdba:sysdba@ds149874.mlab.com:49874/reactionocrdb',
    port:process.env.PORT || 3000,
};


export default config;