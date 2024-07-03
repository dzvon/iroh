use iroh_base::rpc::RpcResult;
use iroh_blobs::Tag;
use quic_rpc::message::{Msg, RpcMsg, ServerStreaming, ServerStreamingMsg};
use serde::{Deserialize, Serialize};

use crate::client::tags::TagInfo;

use super::RpcService;

#[allow(missing_docs)]
#[derive(strum::Display, Debug, Serialize, Deserialize)]
#[nested_enum_utils::enum_conversions(super::Request)]
pub enum Request {
    DeleteTag(DeleteTagRequest),
    ListTags(ListTagsRequest),
}

#[allow(missing_docs)]
#[derive(strum::Display, Debug, Serialize, Deserialize)]
#[nested_enum_utils::enum_conversions(super::Response)]
pub enum Response {
    ListTags(TagInfo),
    DeleteTag(RpcResult<()>),
}

/// List all collections
///
/// Lists all collections that have been explicitly added to the database.
#[derive(Debug, Serialize, Deserialize)]
pub struct ListTagsRequest {
    /// List raw tags
    pub raw: bool,
    /// List hash seq tags
    pub hash_seq: bool,
}

impl ListTagsRequest {
    /// List all tags
    pub fn all() -> Self {
        Self {
            raw: true,
            hash_seq: true,
        }
    }

    /// List raw tags
    pub fn raw() -> Self {
        Self {
            raw: true,
            hash_seq: false,
        }
    }

    /// List hash seq tags
    pub fn hash_seq() -> Self {
        Self {
            raw: false,
            hash_seq: true,
        }
    }
}

impl Msg<RpcService> for ListTagsRequest {
    type Pattern = ServerStreaming;
}

impl ServerStreamingMsg<RpcService> for ListTagsRequest {
    type Response = TagInfo;
}

/// Delete a tag
#[derive(Debug, Serialize, Deserialize)]
pub struct DeleteTagRequest {
    /// Name of the tag
    pub name: Tag,
}

impl RpcMsg<RpcService> for DeleteTagRequest {
    type Response = RpcResult<()>;
}
