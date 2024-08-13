searchState.loadedDescShard("iroh_willow", 0, "Implementation of willow\nStructs that allow constructing entries and other structs …\nVarious utilties and data structures used in this crate.\nThe receiver may be any user for which we have a secret …\nSelector for the area to which a capability must grant …\nSelector for a capability.\nA serializable capability.\nUse any capability that covers the provided area.\nUse any capability that covers the provided point (i.e. …\nThe receiver must be the provided user.\nA read authorisation.\nSelect the receiver for a capability.\nUse the capability which covers the biggest area.\nA write authorisation.\nSelect a capability which authorises writing the provided …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSelect the area to which the capability grants access.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChecks if the provided capability is matched by this …\nChecks whether the provided <code>Area</code> is matched by this …\nThe namespace to which the capability must grant access.\nCreates a new <code>CapSelector</code>.\nSelect the user who may use the capability.\nCreates a <code>CapSelector</code> which selects the widest capability …\nCreates a <code>CapSelector</code> which selects the widest capability …\nCustomize what to do with incoming connections.\nRegisters a callback to determine the fate of incoming …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRegisters an event channel for events from accepted …\nUse any available capability which covers the entry and …\nSelect which capability to use for authenticating a new …\nImport data from the provided bytes and set as payload.\nCreates an entry while setting some fields automatically.\nEither a <code>Entry</code> or a <code>EntryForm</code>.\nUse the provided <code>WriteCapability</code>.\nSet the subspace to the provided <code>SubspaceId</code>.\nSet the timestamp to the provided value.\nImport data from a file on the node’s local file system …\nSet the payload hash directly. The blob must exist in the …\nSet the timestamp to the current system time.\nSources where payload data can come from.\nImport data from a <code>AsyncRead</code> and set as payload.\nImport data from a <code>Stream</code> of bytes and set as payload.\nSet the subspace either to a provided <code>SubspaceId</code>, or use …\nSet the timestamp either to the provided <code>Timestamp</code> or to …\nSet the subspace to the <code>UserId</code> of the user authenticating …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert the form into an <code>Entry</code> by filling the fields with …\nCreates a new <code>EntryForm</code> where the subspace is set to the …\nGet the user id of the user who is the receiver of the …\nThe ALPN protocol name for iroh-willow.\nQUIC application error code for closing connections …\nQUIC application error code for graceful connection …\nQUIC application error code when closing connection …\nPublic-key crypto types for willow\nPrimitives for Private Area Intersection\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA grouping of Entries.\nA grouping of Entries that are among the newest in some …\nClosed end: a value has to be strictly less than the close …\nA three-dimensional range on a specific namespace.\nOpen range (no end value)\nA single point in the 3D range space.\nRanges are simple, one-dimensional ways of grouping …\nThe end of a range, either open or closed.\nA three-dimensional range that includes every <code>Entry</code> …\nTo be included in this AreaOfInterest, an Entry must be …\nCreate a new empty range.\nIf <code>RangeEnd::Open</code>, this is an open range. Otherwise, a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new range that covers everything.\nCreate a new range that covers everything.\nCreate a new <code>AreaOfInterest</code> that covers everything.\nReturns <code>true</code> if <code>value</code> is included in this range.\nReturns <code>true</code> if the range end is open, or if <code>value</code> is …\nReturns <code>true</code> if <code>entry</code> is included in this range.\nReturns <code>true</code> if <code>other</code> range is fully included in this …\nReturns the intersection between <code>self</code> and <code>other</code>.\nCreate the intersection between this range and another …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this range is closed.\nReturns <code>true</code> if this range is closed.\nReturns <code>true</code> if this range is completely empty.\nReturns <code>true</code> if this range includes nothing.\nReturns <code>true</code> if this range is open.\nReturns <code>true</code> if this range is open.\nTo be included in this AreaOfInterest, an Entry’s …\nThe total payload_lengths of all included Entries is at …\nThe namespace\nCreate a new range from its parts.\nCreate a new range.\nTo be included in this Area, an Entry’s path must be …\nRange of <code>Path</code>\nThe 3DRange\nA value must be equal or greater than the <code>start</code> value to …\nTo be included in this Area, an Entry’s subspace_id must …\nRange of <code>SubspaceId</code>\nRange of <code>Timestamp</code>\nTo be included in this Area, an Entry’s timestamp must …\nCommunal namespace, needs …\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\nLength of the byte encoding of <code>Self</code>.\n<code>NamespacePublicKey</code> in bytes\nThe type of the namespace, either communal or owned.\nThe corresponding public key for a `NamespaceSecretKey.\nNamespace secret key.\nThe signature obtained by signing a message with a …\nOwned namespace, neads <code>super::meadowcap::OwnedCapability</code> …\n<code>UserPublicKey</code> in bytes\nThe corresponding public key for a `UserSecretKey.\nUser secret key.\nThe signature obtained by signing a message with a …\nGet this <code>NamespaceId</code> as a byte slice.\nGet this <code>UserId</code> as a byte slice.\nConvert to byte slice.\nConvert to byte slice.\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nConvert to a base32 string limited to the first 10 bytes …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a `NamespaceSecretKey from a byte array.\nCreate from a slice of bytes.\nCreate from a byte slice.\nCreate from a slice of bytes.\nCreate from a byte array.\nCreate from a byte array.\nCreate a new, random [<code>NamespaceSecretKey] with an encoded [</code>…\nCreate a new <code>UserSecretKey</code> with a random key.\nGet the <code>NamespaceId</code> for this namespace.\nConvert into a <code>NamespaceId</code>.\nGet the <code>UserId</code> for this author.\nConvert into a <code>UserId</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert into <code>UserPublicKey</code>.\nConvert into <code>NamespacePublicKey</code>.\nWhether this is the key for a communal namespace.\nGet the <code>NamespacePublicKey</code> for this namespace.\nGet the <code>UserPublicKey</code> for this author.\nSign a message with this `NamespaceSecretKey key.\nSign a message with this <code>UserSecretKey</code> key.\nConvert into a byte array.\nConvert into a byte array.\nConvert into a byte array.\nConvert into a byte array.\nConvert into a byte array.\nConvert into a byte array.\nStrictly verify a signature on a message with this `…\nVerify that a signature matches the <code>msg</code> bytes and was …\nStrictly verify a signature on a message with this …\nVerify that a signature matches the <code>msg</code> bytes and was …\nA capability that authorizes reads or writes in communal …\nA capability that certifies read access to arbitrary …\nTo be used as an AuthorisationToken for Willow.\nA capability that authorizes reads or writes in owned …\nCertifies that an Entry may be written.\nSuccessive authorisations of new UserPublicKeys.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAuthorisation of the user_key by the namespace_key.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>self</code> covers a larger area than <code>other</code>, or …\nThe namespace for which this grants access.\nProves that the Entry was created by the receiver of the …\nThe user to whom this grants access.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nResource handle for <code>AreaOfInterest</code>s that peers wish to …\nLogical channel for controlling the binding of new …\nResource handle for <code>ReadCapability</code> that certify access to …\nLogical channel for controlling the binding of new …\nComplete the commitment scheme to determine the challenge …\nAllow the other peer to reduce its total buffer capacity …\nThe server notifies the client that it has started …\nThe client notifies the server that it can stop dropping …\nAsk the other peer to free a resource handle.\nMake a binding promise of available buffer capacity to the …\nAsk the other peer to send an ControlAbsolve message such …\nLogical channel for transmitting Entries and Payloads …\nTransmit an AuthorisedEntry to the other peer, and …\nTransmit some transformed Payload bytes.\nExpress preferences for Payload transfer in the …\nThe different resource handles employed by the WGPS.\nData from the initial transmission\nResource handle for the private set intersection part of …\nLogical channel for controlling the binding of new …\nAn Entry together with information about how much of its …\nThe different logical channels employed by the WGPS.\nAn iterator over the variants of LogicalChannel\nThe maximum payload size limits when the other peer may …\nBind data to an IntersectionHandle for performing private …\nFinalise private set intersection for a single item.\nSend a previously requested SubspaceCapability.\nAsk the receiver to send a SubspaceCapability.\nResource handle that controls the matching from Payload …\nRepresents an authorisation to read an area of data in a …\nWhereas write access control is baked into the Willow data …\nLogical channel for performing 3d range-based set …\nPrepare transmission of the LengthyEntries a peer has in a …\nTransmit a <code>LengthyEntry</code> as part of 3d range-based set …\nSend a Fingerprint as part of 3d range-based set …\nTransmit some transformed Payload bytes.\nIndicate that no more bytes will be transmitted for the …\nBind an AreaOfInterest to an AreaOfInterestHandle.\nBind a ReadCapability to a CapabilityHandle.\nBind a StaticToken to a StaticTokenHandle.\nResource handle for <code>StaticToken</code>s that peers need to …\nLogical channel for controlling the binding of new …\nWhenever a peer is granted a complete read capability of …\nAn AreaOfInterest that the peer wishes to reference in …\nA CapabilityHandle bound by the sender that grants access …\nThe number of consecutive bytes from the start of the …\nA ReadCapability that the peer wishes to reference in …\nA SubspaceCapability whose granted namespace corresponds …\nThe number of Entries the sender has in the range.\nIf this message is the last of a set of messages that …\nIf this message is the last of a set of messages that …\nThe dynamic part of the entry’s AuthorisationToken.\nThe DynamicToken of the Entry to transmit.\nThe LengthyEntry itself.\nThe Entry to transmit.\nThe Entry in question.\nThe Fingerprint of the range, that is, of all …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe result of first applying hash_into_group to some …\nThe result of performing scalar multiplication between the …\nThe IntersectionHandle, bound by the sender, of the …\nThe IntersectionHandle of the PaiBindFragment message …\nThe IntersectionHandle bound by the sender for the …\nThe handle of the PaiRequestSubspaceCapability message …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert an iterator of anything into <code>FallibleIterator</code> by …\nSet to true if the private set intersection item is a …\nThe nonce of the sender, encoded as a big-endian unsigned …\nThe offset in the Payload in bytes at which Payload …\nThe <code>AccessChallenge</code> nonce, whose hash we sent to the …\nThe 3dRange whose Fingerprint is transmitted.\nThe 3dRange whose LengthyEntries to transmit.\nThe <code>ChallengeHash</code> we received from the remote.\nAn AreaOfInterestHandle, bound by the receiver of this …\nAn AreaOfInterestHandle, bound by the receiver of this …\nAn AreaOfInterestHandle, bound by the sender of this …\nAn AreaOfInterestHandle, bound by the sender of this …\nThe SyncSignature issued by the Receiver of the capability …\nThe SyncSubspaceSignature issued by the receiver of the …\nThe StaticToken to bind.\nA StaticTokenHandle, bound by the sender of this message, …\nA <code>StaticTokenHandle</code> bound to the StaticToken of the Entry …\nThe maximum payload size we received from the remote.\nConvert an iterator of <code>Result</code>s into <code>FallibleIterator</code> by …\nA boolean flag to indicate whether the sender wishes to …\nWhether the sender promises to send the Entries in the …\nAn AuthorisedEntry is a PossiblyAuthorisedEntry for which …\nThe type of components of a <code>Path</code>.\nThe byte length of a <code>PayloadDigest</code>.\nThe metadata for storing a Payload.\nError returned for invalid paths.\nA natural number for limiting the number of path …\nA natural number for limiting the length of path …\nA natural number max_path_length for limiting the overall …\nA type for identifying namespaces.\nA <code>Path</code> is a sequence of at most <code>MAX_COMPONENT_COUNT</code> many …\nA totally ordered type for content-addressing the data …\nA PossiblyAuthorisedEntry is a pair of an Entry and an …\nA type for identifying subspaces.\nA Timestamp is a 64-bit unsigned integer, that is, a …\nError returned for entries that are not authorised.\nThe capability type needed to authorize writes.\nCertifies that an Entry may be written.\nCreate an empty path.\nEncode in the format for signatures into a mutable vector.\nEncoding for Willow entries\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUse only if you can assure that the authorisation was …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA <code>Path</code> <code>s</code> is a prefix of a <code>Path</code> <code>t</code> if the first <code>Component</code>s …\nThe identifier of the namespace to which the Entry belongs.\nThe Path to which the Entry was written.\nThe result of applying hash_payload to the Payload.\nThe length of the Payload in bytes.\nProves that the Entry was created by the receiver of the …\nThe identifier of the subspace to which the Entry belongs.\nThe claimed creation time of the Entry.\n<code>PATH_LENGTH_POWER</code> is the least natural number such that …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe peer that initiated the synchronisation session.\nThe peer that accepted the synchronisation session.\nRun reconciliations and data mode, until intentionally …\nResources bound by ourselves.\nRun a single, full reconciliation, and then quit.\nTo break symmetry, we refer to the peer that initiated the …\nThe bind scope for resources.\nOptions to initialize a session with.\nResources bound by the other peer.\nFinish the session gracefully.\nWait for the session to finish.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nList of interests we wish to synchronize, together with …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if we initiated the session.\nReturns <code>true</code> if we accepted the session.\nSubmit a new synchronisation intent.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAll interests were reconciled.\nA synchronisation intent.\nHandle to a <code>Intent</code>.\nNo interests were reconciled.\nSome interests were reconciled.\nSubmit new synchronisation interests into the session.\nClose the intent.\nWait for the intent to be completed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new intent with associated handle.\nCreate a new detached intent.\nAbort the intent.\nSplit the <code>IntentHandle</code> into a update sink and event stream.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe entry is inserted locally.\nThe entry was received from a peer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIngest a new entry.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a store reader.\nReturns a store snapshot.\nSetup a new subscription, identified by <code>session_id</code>.\nRemove a subscription.\nAdd an area to the list of watched areas for a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUp to how many values to send immediately, before sending …\n<code>k</code> in the protocol, how many splits to generate. at least 2\nTraits for encoding and decoding values to and from bytes.\nA simple asynchronous queue.\nAsynchronous reader to read bytes from a channel.\nAsynchronous writer to write bytes into a channel.\nAdd guarantees available for sending messages.\nClose the channel.\nClose the channel.\nClose the channel.\nClose the channel.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new channel with a byte <code>Writer</code> on the transmit …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the maximum buffer size of the channel.\nCreate a new channel with a message <code>Sender</code> on the transmit …\nRead a chunk of bytes from the channel.\nReceive the next message from the channel.\nSend a message into the channel.\nThe outcome of <code>Decoder::decode_from</code>\nDecoded a value.\nTrait for decoding values from bytes.\nTrait for encoding values into bytes.\nNot enough data to decode the value.\nDecode <code>Self</code> from a byte slice.\nEncode <code>Self</code> into a vector of bytes.\nEncode <code>Self</code> into a writable buffer which implements …\nReturns the length (in bytes) of the encoded value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe number of bytes used for decoding the value.\nThe decoded value.\nWraps a <code>Gen</code> into a <code>Stream</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA simple unbounded FIFO queue.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAttempt to pop the next item from the front of the queue.\nPush a new item to the back of the queue.\nWrapper around <code>Stream</code> that takes a cancel token to cancel …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the current system time in microseconds since …")