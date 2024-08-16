searchState.loadedDescShard("iroh_base", 0, "Base types and utilities for Iroh\nThe blake3 hash used in Iroh.\nCryptographic key handling for <code>iroh-net</code>.\nAddressing for iroh nodes.\nError when decoding the base32.\nDecoding error\nDecoding error kind\nError when decoding the public key.\nError when parsing a hex or base32 string.\nInvalid length\nInvalid padding length\nInvalid symbol\nNon-zero trailing bits\nConvert to a base32 string\nConvert to a base32 string and append out <code>out</code>\nConvert to a base32 string limited to the first 10 bytes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nError kind\nParse from a base32 string into a byte array\nParse a fixed length hex or base32 string into a byte array\nDecode form a base32 string to a vector of bytes\nError position\nA format identifier\nThe hash for the empty byte range (<code>b&quot;&quot;</code>).\nHash type used throughout.\nA hash and format pair\nA sequence of BLAKE3 hashes\nRaw blob\nBytes of the hash.\nConvert to a base32 string limited to the first 10 bytes …\nThe format\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>Hash</code> from its raw bytes representation.\nThe hash\nCreate a new hash and format pair, using the collection …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs hash seq format\nIs raw format\nCalculate the hash of the provided bytes.\nCreate a new hash and format pair.\nCreate a new hash and format pair, using the default (raw) …\nConvert the hash to a hex string.\nSize of an encoded Ed25519 signature in bytes.\nError when decoding the base32.\nError when decoding the public key.\nError when deserialising a <code>PublicKey</code> or a <code>SecretKey</code>.\nThe identifier for a node in the (iroh) network.\nThe length of an ed25519 <code>PublicKey</code>, in bytes.\nA public key.\nA secret key.\nShared Secret.\nEd25519 signature.\nGet this public key as a byte array.\nConvert to a base32 string limited to the first 10 bytes …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse an Ed25519 signature from a byte slice.\nConstruct a <code>PublicKey</code> from a slice of bytes.\nCreate a secret key from its byte representation.\nParse an Ed25519 signature from its <code>R</code> and <code>s</code> components.\nParse an Ed25519 signature from a byte slice.\nGenerate a new <code>SecretKey</code> with the default randomness …\nGenerate a new <code>SecretKey</code> with a randomness generator.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOpens the ciphertext, which must have been created using …\nThe public key of this <code>SecretKey</code>.\nBytes for the <code>R</code> component of a signature.\nBytes for the <code>s</code> component of a signature.\nSeals the provided cleartext.\nReturns the shared key for communication between this key …\nSign the given message and return a digital signature\nReturn the inner byte array.\nConvert this to the bytes representing the secret part. …\nSerialise this key to OpenSSH format.\nConvert this signature into a byte vector.\nDeserialise this key from OpenSSH format.\nVerify a signature on a message with this secret key’s …\nNetwork paths to contact an iroh-net node.\nOptions to configure what is included in a <code>NodeAddr</code> and …\nOnly includes the direct addresses.\nOnly the Node ID is added.\nNetwork-level addressing information for an iroh-net node.\nOnly includes the relay URL.\nIncludes both the relay URL and the direct addresses.\nA URL identifying a relay server.\nApplies the options to <code>self</code>.\nApplies the options to <code>self</code>.\nReturns the direct addresses of this peer.\nSocket addresses where the peer might be reached directly.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>NodeAddr</code> from its parts.\nAddressing information to connect to <code>Self::node_id</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether this addressing information is empty.\nCreates a new <code>NodeAddr</code> with empty <code>AddrInfo</code>.\nThe node’s identifier.\nReturns the relay url of this peer.\nThe node’s home relay url.\nAdds the given direct addresses to the peer’s <code>AddrInfo</code>.\nAdds a relay url to the node’s <code>AddrInfo</code>.\nContains the error value\nContains the success value\nA serializable error type for use in RPC responses.\nA serializable result type for use in RPC responses.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA token containing everything to get a file from the …\nThis looks like a ticket, but base32 decoding failed.\nAn error deserializing an iroh ticket.\nString prefix describing the kind of iroh ticket.\nFound a ticket of with the wrong prefix, indicating the …\nA token containing everything to get a file from the …\nThis looks like a ticket, but postcard deserialization …\nA ticket is a serializable object that combines all …\nVerification of the deserialized bytes failed.\nDeserialize from a string.\nThe <code>BlobFormat</code> for this ticket.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDeserialize from the base32 string representation bytes.\nThe hash of the item this ticket can retrieve.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the contents of the ticket, consuming it.\nCreates a new ticket.\nCreates a new ticket.\nThe <code>NodeAddr</code> of the provider for this ticket.\nThe <code>NodeAddr</code> of the provider for this ticket.\nTrue if the ticket is for a collection and should retrieve …\nSerialize to string.\nSerialize to bytes used in the base32 string …")