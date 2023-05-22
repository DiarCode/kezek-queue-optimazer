// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.23.0
// source: protos/queue/queue.proto

package queue

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Queue struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string       `protobuf:"bytes,1,opt,name=Id,proto3" json:"Id,omitempty"`
	EventId    int64        `protobuf:"varint,2,opt,name=eventId,proto3" json:"eventId,omitempty"`
	QueueItems []*QueueItem `protobuf:"bytes,3,rep,name=queueItems,proto3" json:"queueItems,omitempty"`
}

func (x *Queue) Reset() {
	*x = Queue{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_queue_queue_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Queue) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Queue) ProtoMessage() {}

func (x *Queue) ProtoReflect() protoreflect.Message {
	mi := &file_protos_queue_queue_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Queue.ProtoReflect.Descriptor instead.
func (*Queue) Descriptor() ([]byte, []int) {
	return file_protos_queue_queue_proto_rawDescGZIP(), []int{0}
}

func (x *Queue) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Queue) GetEventId() int64 {
	if x != nil {
		return x.EventId
	}
	return 0
}

func (x *Queue) GetQueueItems() []*QueueItem {
	if x != nil {
		return x.QueueItems
	}
	return nil
}

type QueueItem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int64                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	UserId    int64                  `protobuf:"varint,2,opt,name=userId,proto3" json:"userId,omitempty"`
	Position  int32                  `protobuf:"varint,3,opt,name=position,proto3" json:"position,omitempty"`
	IsCurrent bool                   `protobuf:"varint,4,opt,name=isCurrent,proto3" json:"isCurrent,omitempty"`
	EnteredAt *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=enteredAt,proto3" json:"enteredAt,omitempty"`
}

func (x *QueueItem) Reset() {
	*x = QueueItem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_queue_queue_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueueItem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueueItem) ProtoMessage() {}

func (x *QueueItem) ProtoReflect() protoreflect.Message {
	mi := &file_protos_queue_queue_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueueItem.ProtoReflect.Descriptor instead.
func (*QueueItem) Descriptor() ([]byte, []int) {
	return file_protos_queue_queue_proto_rawDescGZIP(), []int{1}
}

func (x *QueueItem) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *QueueItem) GetUserId() int64 {
	if x != nil {
		return x.UserId
	}
	return 0
}

func (x *QueueItem) GetPosition() int32 {
	if x != nil {
		return x.Position
	}
	return 0
}

func (x *QueueItem) GetIsCurrent() bool {
	if x != nil {
		return x.IsCurrent
	}
	return false
}

func (x *QueueItem) GetEnteredAt() *timestamppb.Timestamp {
	if x != nil {
		return x.EnteredAt
	}
	return nil
}

type CreateQueueRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	EventId int64 `protobuf:"varint,1,opt,name=eventId,proto3" json:"eventId,omitempty"`
}

func (x *CreateQueueRequest) Reset() {
	*x = CreateQueueRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_queue_queue_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateQueueRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateQueueRequest) ProtoMessage() {}

func (x *CreateQueueRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_queue_queue_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateQueueRequest.ProtoReflect.Descriptor instead.
func (*CreateQueueRequest) Descriptor() ([]byte, []int) {
	return file_protos_queue_queue_proto_rawDescGZIP(), []int{2}
}

func (x *CreateQueueRequest) GetEventId() int64 {
	if x != nil {
		return x.EventId
	}
	return 0
}

type EmptyRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *EmptyRequest) Reset() {
	*x = EmptyRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_queue_queue_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EmptyRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EmptyRequest) ProtoMessage() {}

func (x *EmptyRequest) ProtoReflect() protoreflect.Message {
	mi := &file_protos_queue_queue_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EmptyRequest.ProtoReflect.Descriptor instead.
func (*EmptyRequest) Descriptor() ([]byte, []int) {
	return file_protos_queue_queue_proto_rawDescGZIP(), []int{3}
}

var File_protos_queue_queue_proto protoreflect.FileDescriptor

var file_protos_queue_queue_proto_rawDesc = []byte{
	0x0a, 0x18, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x71, 0x75, 0x65, 0x75, 0x65, 0x2f, 0x71,
	0x75, 0x65, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x71, 0x75, 0x65, 0x75,
	0x65, 0x70, 0x62, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x65, 0x0a, 0x05, 0x51, 0x75, 0x65, 0x75, 0x65, 0x12, 0x0e, 0x0a,
	0x02, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x64, 0x12, 0x18, 0x0a,
	0x07, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x32, 0x0a, 0x0a, 0x71, 0x75, 0x65, 0x75, 0x65,
	0x49, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x71, 0x75,
	0x65, 0x75, 0x65, 0x70, 0x62, 0x2e, 0x51, 0x75, 0x65, 0x75, 0x65, 0x49, 0x74, 0x65, 0x6d, 0x52,
	0x0a, 0x71, 0x75, 0x65, 0x75, 0x65, 0x49, 0x74, 0x65, 0x6d, 0x73, 0x22, 0xa7, 0x01, 0x0a, 0x09,
	0x51, 0x75, 0x65, 0x75, 0x65, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a,
	0x09, 0x69, 0x73, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x09, 0x69, 0x73, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x12, 0x38, 0x0a, 0x09, 0x65,
	0x6e, 0x74, 0x65, 0x72, 0x65, 0x64, 0x41, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x65, 0x6e, 0x74, 0x65,
	0x72, 0x65, 0x64, 0x41, 0x74, 0x22, 0x2e, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51,
	0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x49, 0x64, 0x22, 0x0e, 0x0a, 0x0c, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x32, 0x4a, 0x0a, 0x0c, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a, 0x0a, 0x0b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51,
	0x75, 0x65, 0x75, 0x65, 0x12, 0x1b, 0x2e, 0x71, 0x75, 0x65, 0x75, 0x65, 0x70, 0x62, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x0e, 0x2e, 0x71, 0x75, 0x65, 0x75, 0x65, 0x70, 0x62, 0x2e, 0x51, 0x75, 0x65, 0x75,
	0x65, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x73, 0x72, 0x63, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x71,
	0x75, 0x65, 0x75, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_queue_queue_proto_rawDescOnce sync.Once
	file_protos_queue_queue_proto_rawDescData = file_protos_queue_queue_proto_rawDesc
)

func file_protos_queue_queue_proto_rawDescGZIP() []byte {
	file_protos_queue_queue_proto_rawDescOnce.Do(func() {
		file_protos_queue_queue_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_queue_queue_proto_rawDescData)
	})
	return file_protos_queue_queue_proto_rawDescData
}

var file_protos_queue_queue_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_protos_queue_queue_proto_goTypes = []interface{}{
	(*Queue)(nil),                 // 0: queuepb.Queue
	(*QueueItem)(nil),             // 1: queuepb.QueueItem
	(*CreateQueueRequest)(nil),    // 2: queuepb.CreateQueueRequest
	(*EmptyRequest)(nil),          // 3: queuepb.EmptyRequest
	(*timestamppb.Timestamp)(nil), // 4: google.protobuf.Timestamp
}
var file_protos_queue_queue_proto_depIdxs = []int32{
	1, // 0: queuepb.Queue.queueItems:type_name -> queuepb.QueueItem
	4, // 1: queuepb.QueueItem.enteredAt:type_name -> google.protobuf.Timestamp
	2, // 2: queuepb.QueueService.CreateQueue:input_type -> queuepb.CreateQueueRequest
	0, // 3: queuepb.QueueService.CreateQueue:output_type -> queuepb.Queue
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_protos_queue_queue_proto_init() }
func file_protos_queue_queue_proto_init() {
	if File_protos_queue_queue_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_queue_queue_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Queue); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_queue_queue_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueueItem); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_queue_queue_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateQueueRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_queue_queue_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EmptyRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_queue_queue_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_queue_queue_proto_goTypes,
		DependencyIndexes: file_protos_queue_queue_proto_depIdxs,
		MessageInfos:      file_protos_queue_queue_proto_msgTypes,
	}.Build()
	File_protos_queue_queue_proto = out.File
	file_protos_queue_queue_proto_rawDesc = nil
	file_protos_queue_queue_proto_goTypes = nil
	file_protos_queue_queue_proto_depIdxs = nil
}
