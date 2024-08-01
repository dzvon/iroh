searchState.loadedDescShard("iroh_dns_server", 0, "A DNS server and pkarr relay\nConfiguration for the server\nImplementation of a DNS name server for iroh node announces\nHTTP server part of iroh-dns-server\nMetrics support for the server\nThe main server which combines the DNS and HTTP(S) servers.\nShared state and store for the iroh-dns-server\nConfigure the bootstrap servers for mainline DHT …\nServer configuration\nUse custom bootstrap servers.\nUse the default bootstrap servers.\nThe config for the metrics server.\nThe config for the metrics server.\nOptionally set a custom address to bind to.\nSet custom bootstrap nodes.\nGet the data directory.\nDisable the metrics server.\nSet to true to disable the metrics server.\nConfig for the DNS server.\nSet to true to enable the mainline lookup.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConfig for the HTTP server\nConfig for the HTTPS server\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLoad the config from a file.\nConfig for the mainline lookup.\nConfig for the metrics server.\nGet the path to the store database file.\nDNS server settings\nState for serving DNS\nA DNS server that serves pkarr signed packets.\nA handle to the channel over which the response to a DNS …\nHandle a DNS request\nThe IPv4 or IPv6 address to bind the UDP DNS server. Uses …\nSOA record data for any authoritative DNS records\nDefault time to live for returned DNS records (TXT &amp; SOA)\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the local address of the UDP/TCP socket.\nCreate a DNS server given some settings, a connection to …\nDomain used for serving the <code>_iroh_node.&lt;nodeid&gt;.&lt;origin&gt;</code> …\nThe port to serve a local UDP DNS server at\n<code>A</code> record to set for all origins\n<code>AAAA</code> record to set for all origins\n<code>NS</code> record to set for all origins\nWait for all tasks to complete.\nShutdown the server an wait for all tasks to complete.\nSpawn the server.\nThe mode how SSL certificates should be created.\nConfig for the HTTP server\nThe HTTP(S) server part of iroh-dns-server\nConfig for the HTTPS server\nACME with LetsEncrypt servers\nCerts are loaded from a the <code>cert_cache</code> path\nCreate self-signed certificates and store them in the …\nOptionally set a custom bind address (will use 0.0.0.0 if …\nOptionally set a custom bind address (will use 0.0.0.0 if …\nThe mode of SSL certificate creation\nThe list of domains for which SSL certificates should be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the bound address of the HTTP socket.\nGet the bound address of the HTTPS socket.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLetsencrypt contact email address (required if using …\nWhether to use the letsenrypt production servers (only …\nPort to bind to\nPort to bind to\nWait for all tasks to complete.\nShutdown the server and wait for all tasks to complete.\nSpawn the server\nMetrics for iroh-dns-server\nReturns the argument unchanged.\nInit the metrics collection core.\nCalls <code>U::from(self)</code>.\nThe iroh-dns server.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWait for all tasks to complete.\nSpawn the server and run until the <code>Ctrl-C</code> signal is …\nCancel the server tasks and wait for all tasks to complete.\nSpawn the server.\nThe shared app state.\nHandler for DNS requests\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe pkarr DNS store")