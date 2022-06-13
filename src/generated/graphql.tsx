import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  avatarImageUrl?: Maybe<Scalars['String']>;
  /** 当前管理员拉黑的用户 */
  blocks: BlocksConnection;
  createdAt: Scalars['String'];
  /** 管理员的凭证 */
  credential?: Maybe<ICredential>;
  /** 当前管理员认证过的其他管理员 */
  credentials: ICredentialsConnection;
  /** 当前管理员的所有删除操作 */
  deletes: DeletesConnection;
  /** 当前管理员折叠的评论 */
  folds: FoldsConnection;
  id: Scalars['String'];
  lastLoginedAt: Scalars['String'];
  name: Scalars['String'];
  /** 当前管理员创建的置顶 */
  pins: PinsConnection;
  /** 当前管理员拥有的权限 */
  privileges: PrivilegesConnection;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};


export type AdminBlocksArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AdminCredentialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type AdminDeletesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type AdminFoldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type AdminPinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type AdminPrivilegesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type AdminAndUserUnion = Admin | User;

export type AdminEdge = {
  __typename?: 'AdminEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Admin>;
};

export type AdminPageInfo = {
  __typename?: 'AdminPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type AdminsConnection = {
  __typename?: 'AdminsConnection';
  edges: Array<AdminEdge>;
  pageInfo: AdminPageInfo;
  totalCount: Scalars['Int'];
};

export type Anonymous = {
  __typename?: 'Anonymous';
  createdAt: Scalars['String'];
  /** 匿名的创建者，只有创建者自己可见 */
  creator?: Maybe<User>;
  id: Scalars['String'];
  /** 匿名时的校区 */
  subCampus?: Maybe<Scalars['String']>;
  /** 被匿名发布的对象 */
  to: PostAndCommentUnion;
  /** 同一个用户的匿名信息在同一条帖子下面的 watermark 相同 */
  watermark: Scalars['String'];
};

export type Authenable = {
  createdAt: Scalars['String'];
  /** 审核信息的删除者 */
  delete?: Maybe<Delete>;
  id: Scalars['String'];
  /** 用户申请的角色 */
  roles: RolesConnection;
  /** 提交信息的用户 */
  to: User;
};


export type AuthenableRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type AuthenticationInfo = {
  /** 用户头像 */
  avatarImageUrl: Scalars['String'];
  /** 性别 */
  gender: Gender;
  /** 年级 */
  grade: Scalars['String'];
  /** 有效信息图片(e.g. 校园卡照片)的链接 */
  images: Array<Scalars['String']>;
  /** 学院的id的数组 */
  institutes: Array<Scalars['String']>;
  /** 用户昵称 */
  name: Scalars['String'];
  /** 用户申请的角色的id的数组 */
  roles?: InputMaybe<Array<Scalars['String']>>;
  /** 学号 */
  studentId: Scalars['Float'];
  /** 校区的id的数组 */
  subCampuses: Array<Scalars['String']>;
  /** 大学的id的数组 */
  universities: Array<Scalars['String']>;
};

export type AvatarImageUploadCredentialInfo = {
  __typename?: 'AvatarImageUploadCredentialInfo';
  bucket: Scalars['String'];
  expiration: Scalars['String'];
  expiredTime: Scalars['Int'];
  key: Scalars['String'];
  region: Scalars['String'];
  sessionToken: Scalars['String'];
  startTime: Scalars['Int'];
  tmpSecretId: Scalars['String'];
  tmpSecretKey: Scalars['String'];
};

export type Block = {
  __typename?: 'Block';
  createdAt: Scalars['String'];
  /** 拉黑的创建者 */
  creator: Admin;
  description: Scalars['String'];
  id: Scalars['String'];
  /** 被拉黑的对象 */
  to: User;
};

export type BlockEdge = {
  __typename?: 'BlockEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Block>;
};

export type BlockPageInfo = {
  __typename?: 'BlockPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type BlocksConnection = {
  __typename?: 'BlocksConnection';
  edges: Array<BlockEdge>;
  pageInfo: BlockPageInfo;
  totalCount: Scalars['Int'];
};

/** 登录类型 */
export enum Code2Session_Grant_Type {
  /** 通过白板小程序 */
  BlankSpace = 'BLANK_SPACE',
  /** 通过课表小程序 */
  Curriculum = 'CURRICULUM',
  /** 未知的登录类型 */
  Unknown = 'UNKNOWN',
  /** 微信公众号 */
  Wxopen = 'WXOPEN'
}

export enum Conversation_State {
  Close = 'CLOSE',
  Running = 'RUNNING'
}

export type CensorDetail = {
  __typename?: 'CensorDetail';
  /** 辱骂 */
  abuse?: Maybe<Array<Scalars['String']>>;
  /** 广告 */
  ad?: Maybe<Array<Scalars['String']>>;
  /** 违禁品 */
  contraband?: Maybe<Array<Scalars['String']>>;
  /** 涉政 */
  politics?: Maybe<Array<Scalars['String']>>;
  /** 涉黄 */
  porn?: Maybe<Array<Scalars['String']>>;
};

export type CensorResponse = {
  __typename?: 'CensorResponse';
  /** 详情 */
  detail: CensorDetail;
  /** block: 建议直接拉黑; review: 建议人工复查; pass: 建议直接发布; */
  suggestion: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  /** 评论的匿名信息，非匿名评论，此项为null */
  anonymous?: Maybe<Anonymous>;
  /** 获取该评论下的所有评论 */
  comments: CommentsConnection;
  /** Relay版comments */
  commentsWithRelay: CommentsConnectionWithRelay;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  /** 评论的创建者，评论是匿名评论时，creator为null */
  creator?: Maybe<User>;
  /** 评论未被删除时，此项为null */
  delete?: Maybe<Delete>;
  id: Scalars['String'];
  /** 评论的图片 */
  images: Array<Maybe<Scalars['String']>>;
  /** User 回复 User */
  mentions: MentionsConnection;
  /** 获取该评论的举报信息 */
  reports: ReportsConnection;
  /** 获取被评论的对象 */
  to: CommentToUnion;
  /** 按热度获取该评论下的所有评论 */
  trendingComments: CommentsConnection;
  /** 获取该评论下的点赞信息 */
  votes: VotesConnection;
};


export type CommentCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CommentCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type CommentMentionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type CommentReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CommentTrendingCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CommentVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type CommentPageInfo = {
  __typename?: 'CommentPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type CommentToUnion = Anonymous | Comment | Post | User;

export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  nodes: Array<Comment>;
  totalCount: Scalars['Int'];
};

export type CommentsConnectionWithRelay = {
  __typename?: 'CommentsConnectionWithRelay';
  edges: Array<CommentEdge>;
  pageInfo: CommentPageInfo;
  totalCount: Scalars['Int'];
};

export type Conversation = Node & {
  __typename?: 'Conversation';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  /** 会话中的所有消息 */
  messages: MessageItemConnection;
  /** 会话的所有参与者 */
  participants: ParticipantsConnection;
  state: Conversation_State;
  title: Scalars['String'];
};


export type ConversationMessagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ConversationParticipantsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ConversationsConnection = {
  __typename?: 'ConversationsConnection';
  nodes: Array<Conversation>;
  totalCount: Scalars['Int'];
};

export type CourseNotificationTemplateData = {
  first: TemplateValue;
  keyword1: TemplateValue;
  keyword2: TemplateValue;
  keyword3: TemplateValue;
  remark: TemplateValue;
};

export type CourseNotificationTemplateMiniprogram = {
  appid: Scalars['String'];
  pagepath: Scalars['String'];
};

export type CredentialToUnion = Admin | User;

/** deadline 的类型 */
export enum Deadline_Type {
  /** 从内部网导入 */
  AutoImport = 'AUTO_IMPORT',
  /** 用户创建 */
  UserCreate = 'USER_CREATE'
}

/** Deadline对象 */
export type Deadline = {
  __typename?: 'Deadline';
  /** deadline 对应的课程的名字 */
  courseName: Scalars['String'];
  /** 创建时间 */
  createdAt: Scalars['String'];
  /** deadline 的结束时间 */
  endDate: Scalars['String'];
  /** deadline 的唯一id */
  id: Scalars['String'];
  /** deadline 对应的课程 */
  lesson?: Maybe<Lesson>;
  /** deadline 的开始时间 */
  startDate: Scalars['String'];
  /** deadline 的标题 */
  title: Scalars['String'];
  /** deadline 的类型 */
  type: Deadline_Type;
};

export type DeadlineEdge = {
  __typename?: 'DeadlineEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Deadline>;
};

export type DeadlinePageInfo = {
  __typename?: 'DeadlinePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type DeadlinesConnection = {
  __typename?: 'DeadlinesConnection';
  edges: Array<DeadlineEdge>;
  pageInfo: DeadlinePageInfo;
  totalCount: Scalars['Int'];
};

export type Delete = {
  __typename?: 'Delete';
  createdAt: Scalars['String'];
  /** 删除的创建者 */
  creator: Admin;
  id: Scalars['String'];
  /** 被删除的对象 */
  to: DeletedUnion;
};

export type DeleteEdge = {
  __typename?: 'DeleteEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Delete>;
};

export type DeletePageInfo = {
  __typename?: 'DeletePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type DeletedUnion = Comment | Post | Subject | University | UserAuthenInfo;

export type DeletesConnection = {
  __typename?: 'DeletesConnection';
  edges: Array<DeleteEdge>;
  pageInfo: DeletePageInfo;
  totalCount: Scalars['Int'];
};

export type Fold = {
  __typename?: 'Fold';
  createdAt: Scalars['String'];
  /** 折叠的创建者 */
  creator: Admin;
  id: Scalars['String'];
  /** 被折叠的对象 */
  to: Comment;
};

export type FoldEdge = {
  __typename?: 'FoldEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Fold>;
};

export type FoldPageInfo = {
  __typename?: 'FoldPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type FoldsConnection = {
  __typename?: 'FoldsConnection';
  edges: Array<FoldEdge>;
  pageInfo: FoldPageInfo;
  totalCount: Scalars['Int'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  None = 'NONE'
}

export type GetUnlimitedWXacodeArgsLineColor = {
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  r?: InputMaybe<Scalars['Int']>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  /** 具有该 Hashtag 的所有 Post */
  posts: PostsConnection;
  title: Scalars['String'];
};


export type HashtagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type HashtagEdge = {
  __typename?: 'HashtagEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Hashtag>;
};

export type HashtagPageInfo = {
  __typename?: 'HashtagPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type HashtagsConnection = {
  __typename?: 'HashtagsConnection';
  edges: Array<HashtagEdge>;
  pageInfo: HashtagPageInfo;
  totalCount: Scalars['Int'];
};

/** 凭证是成为管理员的前提 */
export type ICredential = {
  __typename?: 'ICredential';
  createdAt: Scalars['String'];
  creator: Admin;
  id: Scalars['String'];
  to?: Maybe<CredentialToUnion>;
};

export type ICredentialEdge = {
  __typename?: 'ICredentialEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ICredential>;
};

export type ICredentialPageInfo = {
  __typename?: 'ICredentialPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ICredentialsConnection = {
  __typename?: 'ICredentialsConnection';
  edges: Array<ICredentialEdge>;
  pageInfo: ICredentialPageInfo;
  totalCount: Scalars['Int'];
};

/** 全局权限值 */
export enum Iprivilege {
  /** 管理员能通过一个举报 */
  AdminCanAcceptReport = 'ADMIN_CAN_ACCEPT_REPORT',
  AdminCanAddBlockOnUser = 'ADMIN_CAN_ADD_BLOCK_ON_USER',
  AdminCanAddFoldOnComment = 'ADMIN_CAN_ADD_FOLD_ON_COMMENT',
  AdminCanAddPinOnPost = 'ADMIN_CAN_ADD_PIN_ON_POST',
  AdminCanAuthenOther = 'ADMIN_CAN_AUTHEN_OTHER',
  AdminCanAuthenUser = 'ADMIN_CAN_AUTHEN_USER',
  /** 管理员能创建一个新的管理员 */
  AdminCanCreateAdmin = 'ADMIN_CAN_CREATE_ADMIN',
  AdminCanCreateUser = 'ADMIN_CAN_CREATE_USER',
  AdminCanDeleteAdmin = 'ADMIN_CAN_DELETE_ADMIN',
  AdminCanDeleteSubject = 'ADMIN_CAN_DELETE_SUBJECT',
  AdminCanDeleteUser = 'ADMIN_CAN_DELETE_USER',
  AdminCanRejectReport = 'ADMIN_CAN_REJECT_REPORT',
  AdminCanRemoveBlockOnUser = 'ADMIN_CAN_REMOVE_BLOCK_ON_USER',
  AdminCanRemovePinOnPost = 'ADMIN_CAN_REMOVE_PIN_ON_POST',
  AdminCanUpdateUser = 'ADMIN_CAN_UPDATE_USER',
  /** 管理员能查看全局数据(某段时间内的注册数，点赞数，发帖数) */
  AdminCanViewState = 'ADMIN_CAN_VIEW_STATE',
  Root = 'ROOT',
  /** 用户能创建一个新的主题 */
  UserCanCreateSubject = 'USER_CAN_CREATE_SUBJECT'
}

export type ImagesUploadCredentialInfo = {
  __typename?: 'ImagesUploadCredentialInfo';
  /** 桶id */
  bucket: Scalars['String'];
  expiration: Scalars['String'];
  /** 签证过期时间 */
  expiredTime: Scalars['Int'];
  /** key */
  keys: Array<Scalars['String']>;
  /** 桶所在的地域 */
  region: Scalars['String'];
  sessionToken: Scalars['String'];
  /** 签证生效时间 */
  startTime: Scalars['Int'];
  tmpSecretId: Scalars['String'];
  tmpSecretKey: Scalars['String'];
};

export type Institute = {
  __typename?: 'Institute';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  /** 当前学院所在的大学 */
  university: University;
};

export type InstituteEdge = {
  __typename?: 'InstituteEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Institute>;
};

export type InstitutePageInfo = {
  __typename?: 'InstitutePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type InstitutesConnection = {
  __typename?: 'InstitutesConnection';
  edges: Array<InstituteEdge>;
  pageInfo: InstitutePageInfo;
  totalCount: Scalars['Int'];
};

export type KeywordsExtractionResult = {
  __typename?: 'KeywordsExtractionResult';
  score: Scalars['Float'];
  word: Scalars['String'];
};

/** 课程对象 */
export type Lesson = {
  __typename?: 'Lesson';
  /** TODO, 该课程要上课的周数的数组 */
  circle?: Maybe<Array<Scalars['Int']>>;
  /** 自定义课程时的颜色 */
  color?: Maybe<Scalars['String']>;
  /** 课程的创建时间 */
  createdAt: Scalars['String'];
  /** 获取该课程的所有 deadline */
  deadlines: DeadlinesConnection;
  /** 课程描述，比如 1-17周 星期五 第3-4节 致理楼L1-302,1-17周 星期四 第3-4节 致理楼L1-302 */
  description: Scalars['String'];
  /** 上课地点 */
  destination?: Maybe<Scalars['String']>;
  /** TODO, 授课教师的名字 */
  educatorName?: Maybe<Scalars['String']>;
  /** TODO, 结束学年 */
  endYear?: Maybe<Scalars['Int']>;
  /** 课程内部唯一 id */
  id: Scalars['String'];
  /** 课程对应的唯一课程号 */
  lessonId: Scalars['String'];
  /** 该课程下的所有课程实例 */
  lessonItems: Array<Maybe<LessonItem>>;
  /** 课程名称 */
  name: Scalars['String'];
  /** TODO, 学期 */
  semester?: Maybe<Scalars['Int']>;
  /** TODO, 开始学年 */
  startYear?: Maybe<Scalars['Int']>;
};


/** 课程对象 */
export type LessonDeadlinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type LessonEdge = {
  __typename?: 'LessonEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Lesson>;
};

export type LessonItem = {
  __typename?: 'LessonItem';
  /** TODO, 该课程要上课的周数的数组 */
  circle?: Maybe<Array<Scalars['Int']>>;
  /** 该节课位于一星期中的第几天 */
  dayInWeek?: Maybe<Scalars['Int']>;
  /** TODO, 课程描述，比如 1-17周 星期五 第3-4节 致理楼L1-302,1-17周 星期四 第3-4节 致理楼L1-302 */
  description?: Maybe<Scalars['String']>;
  /** TODO, 上课地点 */
  destination?: Maybe<Scalars['String']>;
  /** 第几节课结束 */
  end: Scalars['Int'];
  id: Scalars['String'];
  /** 第几节课开始 */
  start: Scalars['Int'];
};

export type LessonItemInput = {
  /** 该课程要上课的周数的数组 */
  circle: Array<Scalars['Int']>;
  /** 该节课位于一星期中的第几天 */
  dayInWeek: Scalars['Int'];
  /** 课程描述，比如 1-17周 星期五 第3-4节 致理楼L1-302,1-17周 星期四 第3-4节 致理楼L1-302 */
  description: Scalars['String'];
  /** 上课地点 */
  destination: Scalars['String'];
  /** 第几节课结束 */
  end: Scalars['Int'];
  /** 第几节课开始 */
  start: Scalars['Int'];
};

export type LessonMetaData = {
  __typename?: 'LessonMetaData';
  /** 该节课位于一星期中的第几天 */
  dayInWeek?: Maybe<Scalars['Int']>;
  /** 当前结束学年 */
  endYear: Scalars['Int'];
  /** 当前学期 */
  semester: Scalars['Int'];
  /** 当前开始学年 */
  startYear: Scalars['Int'];
  /** 当前周数 */
  week: Scalars['Int'];
};

export type LessonNotificationSettings = {
  __typename?: 'LessonNotificationSettings';
  /** 是否订阅通知 */
  needNotifications: Scalars['Boolean'];
};

export type LessonPageInfo = {
  __typename?: 'LessonPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type LessonsConnection = {
  __typename?: 'LessonsConnection';
  edges: Array<LessonEdge>;
  pageInfo: LessonPageInfo;
  totalCount: Scalars['Int'];
};

export type LoginResult = Node & Person & {
  __typename?: 'LoginResult';
  /** 当前用户提交的认证信息 */
  authenInfo?: Maybe<UserAuthenInfo>;
  /** 用户头像链接 */
  avatarImageUrl?: Maybe<Scalars['String']>;
  /**
   * 学院
   * @deprecated feature/multiuniversity 后废弃，请使用 institutes 代替
   */
  college?: Maybe<Scalars['String']>;
  /** 当前用户发布的评论 */
  comments: CommentsConnection;
  commentsWithRelay: CommentsConnectionWithRelay;
  /** 当前用户创建的所有会话 */
  conversations: ConversationsConnection;
  /** 用户创建时间 */
  createdAt: Scalars['String'];
  /** 当前用户的认证凭证，未认证用户为null */
  credential?: Maybe<ICredential>;
  /** 当前用户的deadlines */
  deadlines: DeadlinesConnection;
  /** 用户性别 */
  gender?: Maybe<Gender>;
  /** 年级 */
  grade?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** 当前用户所属的学院 */
  institutes?: Maybe<InstitutesConnection>;
  /** 用户上一次调用login接口获取token的系统时间 */
  lastLoginedAt: Scalars['String'];
  /** 获取当前用户上课通知的设置 */
  lessonNotificationSettings: LessonNotificationSettings;
  /** 当前用户的所有课程 */
  lessons: LessonsConnection;
  /** 用户昵称 */
  name: Scalars['String'];
  /** 微信openId,注册时传入微信code自动通过微信提供的接口获取获取 */
  openId: Scalars['String'];
  /** 当前用户创建的所有帖子 */
  posts: PostsConnection;
  postsWithRelay: PostsConnectionWithRelay;
  /** 当前用户的隐私设定 */
  privateSettings?: Maybe<PrivateSettings>;
  /** 当前用户具有的权限 */
  privileges: PrivilegesConnection;
  /** 回复的通知 */
  replyNotifications?: Maybe<NotificationsConnection>;
  /** 当前用户收到的所有举报 */
  reports: ReportsConnection;
  /** 当前用户的所有角色 */
  roles: RolesConnection;
  /**
   * 学校
   * @deprecated feature/multiuniversity 后废弃，请使用 university 代替
   */
  school?: Maybe<Scalars['String']>;
  /** 学号 */
  studentId?: Maybe<Scalars['Int']>;
  /**
   * 校区
   * @deprecated feature/multiuniversity 后废弃，请使用 subCampuses 代替
   */
  subCampus?: Maybe<Scalars['String']>;
  /** 当前用户所属的校区 */
  subCampuses?: Maybe<SubCampusesConnection>;
  /** 当前用户创建的所有主题 */
  subjects: SubjectsConnection;
  /** token */
  token: Scalars['String'];
  /** 微信unionId,注册时传入微信code自动通过微信提供的接口获取获取 */
  unionId: Scalars['String'];
  /** 当前用户所在的大学 */
  university?: Maybe<University>;
  /** 用户信息的更新时间 */
  updatedAt: Scalars['String'];
  /** 点赞的通知 */
  upvoteNotifications?: Maybe<VoteWithUnreadCountsConnection>;
  /** 用户账号 */
  userId: Scalars['String'];
  /** 当前用户的所有点赞 */
  votes: VotesConnection;
  /** 当前用户的所有点赞 */
  votesWithRelay: VotesConnectionWithRelay;
};


export type LoginResultCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultConversationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultDeadlinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultInstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endYear: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
};


export type LoginResultPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultPrivilegesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultReplyNotificationsArgs = {
  actions?: InputMaybe<Array<Notification_Action>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type LoginResultReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultSubCampusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type LoginResultSubjectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultUpvoteNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type LoginResultVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LoginResultVotesWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type Mention = {
  __typename?: 'Mention';
  /** 被@的主体 */
  about: PostAndCommentUnion;
  /** 创建时间 */
  createdAt: Scalars['String'];
  /** 创建者 */
  creator: User;
  id: Scalars['String'];
  /** 被@的对象 */
  to: User;
};

export type MentionEdge = {
  __typename?: 'MentionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Mention>;
};

export type MentionPageInfo = {
  __typename?: 'MentionPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type MentionsConnection = {
  __typename?: 'MentionsConnection';
  edges: Array<MentionEdge>;
  pageInfo: MentionPageInfo;
  totalCount: Scalars['Int'];
};

export type Message = Node & {
  __typename?: 'Message';
  content: Scalars['String'];
  /** 消息所属的会话 */
  conversation: Conversation;
  createdAt: Scalars['String'];
  /** 消息的创建者 */
  creator: MessageCreatorUnion;
  id: Scalars['String'];
};

export type MessageCreatorUnion = Admin | User;

export type MessageItem = Message | Report;

export type MessageItemConnection = {
  __typename?: 'MessageItemConnection';
  nodes: Array<MessageItem>;
  totalCount: Scalars['Int'];
};

export type MpTemplateMsg = {
  /** 公众号appid，要求与小程序有绑定且同主体 */
  appid: Scalars['String'];
  /** 公众号模板消息的数据 */
  data: CourseNotificationTemplateData;
  /** 公众号模板消息所要跳转的小程序，小程序的必须与公众号具有绑定关系 */
  miniprogram: CourseNotificationTemplateMiniprogram;
  /** 公众号模板id */
  template_id: Scalars['String'];
  /** 公众号模板消息所要跳转的url */
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 管理员接口：认为举报有效 */
  acceptReport: Scalars['Boolean'];
  /** 测试接口，将当前所有帖子添加到某个学校 */
  addAllPostToUniversity: Scalars['Boolean'];
  /** 测试接口，将当前所有用户添加到某个学校 */
  addAllUserToUniversity: Scalars['Boolean'];
  /** 拉黑一个用户 */
  addBlockOnUser: Block;
  /** 添加一条评论到评论 */
  addCommentOnComment: Comment;
  /** 添加一条评论到帖子 */
  addCommentOnPost: Comment;
  /** 添加一条评论到评论的创建者 */
  addCommentOnUser: Comment;
  /** 用户添加一个 deadline */
  addDeadline: Deadline;
  /** 折叠一条评论 */
  addFoldOnComment: Fold;
  /** 添加一个课程到当前用户 */
  addLesson: Lesson;
  /** 添加一个 LessonItem 到 Lesson */
  addLessonItems: Lesson;
  /** 管理员添加课程到某用户 */
  addLessonToUser: Lesson;
  /** 将 Comment 以 Mention 形式回复某个 User */
  addMentionOnUser: Mention;
  /** 向指定的会话中添加一条消息 */
  addMessageOnConversation: Message;
  /** 置顶一个帖子 */
  addPinOnPost: Pin;
  /** 添加一个权限到某管理员 */
  addPrivilegeOnAdmin: Privilege;
  /** 添加一个权限到某用户 */
  addPrivilegeOnUser: Privilege;
  /** 举报一条评论 */
  addReportOnComment: Report;
  /** 举报一个帖子 */
  addReportOnPost: Report;
  /** 举报一个用户 */
  addReportOnUser: Report;
  /** 添加一个角色到某用户 */
  addRoleOnUser: User;
  /** 点赞一条评论 */
  addUpvoteOnComment: Comment;
  /** 点赞一个帖子 */
  addUpvoteOnPost: Post;
  /** 增加评论的浏览量 */
  addViewOnComment: View;
  /** 增加帖子的浏览量 */
  addViewOnPost: View;
  /** 已存在的管理员认证一个新注册的管理员 */
  authenAdmin: ICredential;
  /** 认证用户 */
  authenUser: User;
  /** 关闭一个会话 */
  closeConversation: Conversation;
  /** 创建一个会话 */
  createConversation: Conversation;
  createInstitute: Institute;
  /** 创建一个帖子 */
  createPost: Post;
  /** 创建角色 */
  createRole: Role;
  createSubCampus: SubCampus;
  /** 创建一个主题 */
  createSubject: Subject;
  createUniversity: University;
  /** 管理员或用户删除一个评论 */
  deleteComment: Delete;
  deleteInstitute: Scalars['Boolean'];
  /** 从当前用户中删除一个课程 */
  deleteLesson: Scalars['Boolean'];
  /** 从当前用户中删除某节课 */
  deleteLessonItem: Scalars['Boolean'];
  /** 管理员或用户删除一个帖子 */
  deletePost: Delete;
  deleteSubCampus: Scalars['Boolean'];
  /** 以id删除一个主题 */
  deleteSubject: Delete;
  /** 标记删除一个 University */
  deleteUniversity: Scalars['Boolean'];
  /** 管理员接口：认为举报无效 */
  discardReport: Scalars['Boolean'];
  /** 删除数据库所有数据，包括schema */
  dropAllData: Scalars['Boolean'];
  /** 删除数据库所有数据，但保留schema */
  dropData: Scalars['Boolean'];
  /** 登录 */
  login: LoginResult;
  /** 通过小程序的code进行登录 */
  loginByCode: LoginResult;
  /** 用于调试的接口: 根据userId 删除一个刚创建的用户，该用户不能有点赞评论发帖等操作 */
  pureDeleteUser: Scalars['Boolean'];
  /** 注册 */
  register: User;
  /** 注册一个管理员，需要使用authen认证新注册的管理员 */
  registerAdmin: Admin;
  /** 解除拉黑一个用户 */
  removeBlockOnUser: Scalars['Boolean'];
  /** 对一个帖子取消置顶 */
  removePinOnPost: Scalars['Boolean'];
  /** 从某管理员移除一个权限 */
  removePrivilegeOnAdmin: Scalars['Boolean'];
  /** 从某用户移除一个权限 */
  removePrivilegeOnUser: Scalars['Boolean'];
  /** 取消点赞 */
  removeUpvoteOnComment: Comment;
  /** 取消点赞 */
  removeUpvoteOnPost: Post;
  /** 测试方法 */
  setLessonNotificationStatus: Scalars['String'];
  /** 设置创建时间小于当前系统时间的所有通知为已读 */
  setReadAllNotifications: Scalars['Boolean'];
  /** 批量已读回复通知 */
  setReadReplyNotifications: Scalars['Boolean'];
  /** 批量已读点赞通知 */
  setReadUpvoteNotifications: Scalars['Boolean'];
  /** 重置数据库schema */
  setSchema: SetDbSchema;
  /** 测试接口，手动触发一个上课课程通知 */
  triggerLessonNotification: Scalars['String'];
  /** 手动触发一个课程通知任务 */
  triggerTask: Scalars['String'];
  /** 更新一个课程 */
  updateLesson: Lesson;
  /** 更新课程表元信息 */
  updateLessonMetaData: LessonMetaData;
  /** 更新用户上课通知设置 */
  updateLessonNotificationSettings: LessonNotificationSettings;
  /** 更改密码 */
  updatePassword: UpdatePasswordResultUnion;
  /** 更新当前用户的隐私信息 */
  updatePrivateSettings: PrivateSettings;
  /** 以id更新一个主题 */
  updateSubject: Subject;
  updateUniversity: University;
  /** 更新用户画像 */
  updateUser: User;
};


export type MutationAcceptReportArgs = {
  content: Scalars['String'];
  reportId: Scalars['String'];
};


export type MutationAddAllPostToUniversityArgs = {
  id: Scalars['String'];
};


export type MutationAddAllUserToUniversityArgs = {
  id: Scalars['String'];
};


export type MutationAddBlockOnUserArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAddCommentOnCommentArgs = {
  content: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};


export type MutationAddCommentOnPostArgs = {
  content: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};


export type MutationAddCommentOnUserArgs = {
  content: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};


export type MutationAddDeadlineArgs = {
  courseName: Scalars['String'];
  deadlineId: Scalars['String'];
  endDate: Scalars['String'];
  lessonId?: InputMaybe<Scalars['String']>;
  startDate: Scalars['String'];
  title: Scalars['String'];
  type: Deadline_Type;
};


export type MutationAddFoldOnCommentArgs = {
  commentId: Scalars['String'];
};


export type MutationAddLessonArgs = {
  circle: Array<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  destination?: InputMaybe<Scalars['String']>;
  educatorName: Scalars['String'];
  endYear: Scalars['Int'];
  lessonId: Scalars['String'];
  lessonItems?: InputMaybe<Array<LessonItemInput>>;
  name: Scalars['String'];
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
};


export type MutationAddLessonItemsArgs = {
  lessonId: Scalars['String'];
  lessonItems?: InputMaybe<Array<LessonItemInput>>;
};


export type MutationAddLessonToUserArgs = {
  circle: Array<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  destination?: InputMaybe<Scalars['String']>;
  educatorName: Scalars['String'];
  endYear: Scalars['Int'];
  lessonId: Scalars['String'];
  lessonItems?: InputMaybe<Array<LessonItemInput>>;
  name: Scalars['String'];
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
  to: Scalars['String'];
};


export type MutationAddMentionOnUserArgs = {
  content: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
  toUser: Scalars['String'];
};


export type MutationAddMessageOnConversationArgs = {
  content: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAddPinOnPostArgs = {
  postId: Scalars['String'];
};


export type MutationAddPrivilegeOnAdminArgs = {
  adminId: Scalars['String'];
  privilege: Iprivilege;
};


export type MutationAddPrivilegeOnUserArgs = {
  id: Scalars['String'];
  privilege: Iprivilege;
};


export type MutationAddReportOnCommentArgs = {
  description: Scalars['String'];
  to: Scalars['String'];
  type: Report_Type;
};


export type MutationAddReportOnPostArgs = {
  description: Scalars['String'];
  to: Scalars['String'];
  type: Report_Type;
};


export type MutationAddReportOnUserArgs = {
  description: Scalars['String'];
  to: Scalars['String'];
  type: Report_Type;
};


export type MutationAddRoleOnUserArgs = {
  roleId: Scalars['String'];
  to: Scalars['String'];
};


export type MutationAddUpvoteOnCommentArgs = {
  commentId: Scalars['String'];
};


export type MutationAddUpvoteOnPostArgs = {
  postId: Scalars['String'];
};


export type MutationAddViewOnCommentArgs = {
  commentId: Scalars['String'];
};


export type MutationAddViewOnPostArgs = {
  postId: Scalars['String'];
};


export type MutationAuthenAdminArgs = {
  to: Scalars['String'];
};


export type MutationAuthenUserArgs = {
  id: Scalars['String'];
  info?: InputMaybe<AuthenticationInfo>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationCloseConversationArgs = {
  conversationId: Scalars['String'];
};


export type MutationCreateConversationArgs = {
  description: Scalars['String'];
  participants: Array<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationCreateInstituteArgs = {
  id: Scalars['String'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  subjectId?: InputMaybe<Scalars['String']>;
  universityId: Scalars['String'];
};


export type MutationCreateRoleArgs = {
  title: Scalars['String'];
};


export type MutationCreateSubCampusArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateSubjectArgs = {
  avatarImageUrl: Scalars['String'];
  backgroundImageUrl: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
  universityId: Scalars['String'];
};


export type MutationCreateUniversityArgs = {
  logoUrl: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type MutationDeleteInstituteArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLessonArgs = {
  lessonId: Scalars['String'];
};


export type MutationDeleteLessonItemArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationDeleteSubCampusArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSubjectArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUniversityArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDiscardReportArgs = {
  content: Scalars['String'];
  reportId: Scalars['String'];
};


export type MutationLoginArgs = {
  id?: InputMaybe<Scalars['String']>;
  sign: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationLoginByCodeArgs = {
  code: Scalars['String'];
  grantType?: InputMaybe<Code2Session_Grant_Type>;
};


export type MutationPureDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationRegisterArgs = {
  code?: InputMaybe<Scalars['String']>;
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  name: Scalars['String'];
  sign: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterAdminArgs = {
  avatarImageUrl: Scalars['String'];
  name: Scalars['String'];
  sign: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRemoveBlockOnUserArgs = {
  from: Scalars['String'];
};


export type MutationRemovePinOnPostArgs = {
  from: Scalars['String'];
};


export type MutationRemovePrivilegeOnAdminArgs = {
  from: Scalars['String'];
  privilege: Iprivilege;
};


export type MutationRemovePrivilegeOnUserArgs = {
  from: Scalars['String'];
  privilege: Iprivilege;
};


export type MutationRemoveUpvoteOnCommentArgs = {
  from: Scalars['String'];
};


export type MutationRemoveUpvoteOnPostArgs = {
  from: Scalars['String'];
};


export type MutationSetReadReplyNotificationsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationSetReadUpvoteNotificationsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationTriggerLessonNotificationArgs = {
  dayInWeek?: InputMaybe<Scalars['Int']>;
  endYear: Scalars['Int'];
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
  taskType: Task_Type;
  to: Scalars['String'];
  week: Scalars['Int'];
};


export type MutationUpdateLessonArgs = {
  circle?: InputMaybe<Array<Scalars['Int']>>;
  color?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  educatorName?: InputMaybe<Scalars['String']>;
  lessonId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateLessonMetaDataArgs = {
  dayInWeek?: InputMaybe<Scalars['Int']>;
  endYear: Scalars['Int'];
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
  week: Scalars['Int'];
};


export type MutationUpdateLessonNotificationSettingsArgs = {
  needNotifications: Scalars['Boolean'];
};


export type MutationUpdatePasswordArgs = {
  sign: Scalars['String'];
};


export type MutationUpdatePrivateSettingsArgs = {
  isGenderPrivate?: InputMaybe<Scalars['Boolean']>;
  isGradePrivate?: InputMaybe<Scalars['Boolean']>;
  isInstitutePrivate?: InputMaybe<Scalars['Boolean']>;
  isSubCampusPrivate?: InputMaybe<Scalars['Boolean']>;
  isUniversityPrivate?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateSubjectArgs = {
  avatarImageUrl?: InputMaybe<Scalars['String']>;
  backgroundImageUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUniversityArgs = {
  id: Scalars['String'];
  logoUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  avatarImageUrl?: InputMaybe<Scalars['String']>;
  isCollegePrivate?: InputMaybe<Scalars['Boolean']>;
  isGenderPrivate?: InputMaybe<Scalars['Boolean']>;
  isGradePrivate?: InputMaybe<Scalars['Boolean']>;
  isSchoolPrivate?: InputMaybe<Scalars['Boolean']>;
  isSubCampusPrivate?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  sign?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export enum Nlp_Sentiment {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  Positive = 'POSITIVE'
}

export enum Notification_Action {
  AddCommentOnComment = 'ADD_COMMENT_ON_COMMENT',
  AddCommentOnPost = 'ADD_COMMENT_ON_POST',
  AddCommentOnUser = 'ADD_COMMENT_ON_USER',
  AddUpvoteOnComment = 'ADD_UPVOTE_ON_COMMENT',
  AddUpvoteOnPost = 'ADD_UPVOTE_ON_POST'
}

export enum Notification_Type {
  All = 'ALL',
  Read = 'READ',
  UnRead = 'UN_READ'
}

export type Node = {
  id: Scalars['String'];
};

export type Notifiable = {
  /** 通知涉及的对象：用户User A 对帖子 Post或评论Comment B 发布了评论 Comment C，则C是about；用户User A点赞帖子Post 或评论Comment B则B是about */
  about: PostAndCommentUnion;
  /** 通知的创建者，匿名评论时为空 */
  creator?: Maybe<User>;
  id: Scalars['String'];
  /** 被通知的对象 */
  to: User;
};

export type Notification = Notifiable & {
  __typename?: 'Notification';
  /** 通知涉及的对象：用户User A 对帖子 Post或评论Comment B 发布了评论 Comment C，则C是about；用户User A点赞帖子Post 或评论Comment B则B是about */
  about: PostAndCommentUnion;
  /** 通知涉及的操作 */
  action: Notification_Action;
  /** 通知的创建时间 */
  createdAt: Scalars['String'];
  /** 通知的创建者，匿名评论时为空 */
  creator?: Maybe<User>;
  /** 通知的id */
  id: Scalars['String'];
  /** 当前通知是否已被通知接收者设置为已读状态 */
  isRead: Scalars['Boolean'];
  /** 被通知的对象 */
  to: User;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Notification>;
};

export type NotificationPageInfo = {
  __typename?: 'NotificationPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  edges: Array<NotificationEdge>;
  pageInfo: NotificationPageInfo;
  totalCount: Scalars['Int'];
};

export enum Order_By {
  CreatedAtDesc = 'CREATED_AT_DESC',
  Trending = 'TRENDING'
}

export type ParticipantsConnection = {
  __typename?: 'ParticipantsConnection';
  nodes: Array<User>;
  totalCount: Scalars['Int'];
};

export type Person = {
  /** 当前用户提交的认证信息 */
  authenInfo?: Maybe<UserAuthenInfo>;
  /** 当前用户发布的评论 */
  comments: CommentsConnection;
  commentsWithRelay: CommentsConnectionWithRelay;
  /** 当前用户创建的所有会话 */
  conversations: ConversationsConnection;
  /** 当前用户的认证凭证，未认证用户为null */
  credential?: Maybe<ICredential>;
  /** 当前用户的deadlines */
  deadlines: DeadlinesConnection;
  /** 当前用户的性别 */
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  /** 当前用户所属的学院 */
  institutes?: Maybe<InstitutesConnection>;
  /** 获取当前用户上课通知的设置 */
  lessonNotificationSettings: LessonNotificationSettings;
  /** 当前用户的所有课程 */
  lessons: LessonsConnection;
  name: Scalars['String'];
  /** 当前用户创建的所有帖子 */
  posts: PostsConnection;
  postsWithRelay: PostsConnectionWithRelay;
  /** 当前用户的隐私设定 */
  privateSettings?: Maybe<PrivateSettings>;
  /** 当前用户具有的权限 */
  privileges: PrivilegesConnection;
  /** 回复的通知 */
  replyNotifications?: Maybe<NotificationsConnection>;
  /** 当前用户收到的所有举报 */
  reports: ReportsConnection;
  /** 当前用户的所有角色 */
  roles: RolesConnection;
  /** 当前用户所属的校区 */
  subCampuses?: Maybe<SubCampusesConnection>;
  /** 当前用户创建的所有主题 */
  subjects: SubjectsConnection;
  /** 当前用户所在的大学 */
  university?: Maybe<University>;
  /** 点赞的通知 */
  upvoteNotifications?: Maybe<VoteWithUnreadCountsConnection>;
  userId: Scalars['String'];
  /** 当前用户的所有点赞 */
  votes: VotesConnection;
  /** 当前用户的所有点赞 */
  votesWithRelay: VotesConnectionWithRelay;
};


export type PersonCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonConversationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonDeadlinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonInstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endYear: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
};


export type PersonPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonPrivilegesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonReplyNotificationsArgs = {
  actions?: InputMaybe<Array<Notification_Action>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type PersonReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonSubCampusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PersonSubjectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonUpvoteNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type PersonVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PersonVotesWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type Pin = {
  __typename?: 'Pin';
  createdAt: Scalars['String'];
  /** 置顶的创建者 */
  creator: Admin;
  id: Scalars['String'];
  /** 被置顶的对象，被置顶对象被删除时，返回null */
  to?: Maybe<PostAndCommentUnion>;
};

export type PinEdge = {
  __typename?: 'PinEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Pin>;
};

export type PinPageInfo = {
  __typename?: 'PinPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PinsConnection = {
  __typename?: 'PinsConnection';
  edges: Array<PinEdge>;
  pageInfo: PinPageInfo;
  totalCount: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  /** 帖子的匿名信息，非匿名帖子此项为空 */
  anonymous?: Maybe<Anonymous>;
  /**
   * 帖子的所有评论
   * @deprecated 请使用commentsWithRelay
   */
  comments: CommentsConnection;
  /** 获取所有评论 relay分页版 */
  commentsWithRelay: CommentsConnectionWithRelay;
  content: Scalars['String'];
  createdAt: Scalars['String'];
  /** 帖子的创建者，当帖子是匿名帖子时，返回null */
  creator?: Maybe<User>;
  /** 帖子未被删除时，此项为空 */
  delete?: Maybe<Delete>;
  /** 帖子的折叠评论 */
  foldedComments: CommentsConnection;
  /** 帖子的所有折叠评论 */
  foldedCommentsWithRelay: CommentsConnectionWithRelay;
  /** 该帖子的所有 Hashtag */
  hashtags: HashtagsConnection;
  id: Scalars['String'];
  /** 帖子的图片 */
  images: Array<Maybe<Scalars['String']>>;
  /** 帖子收到的举报 */
  reports: ReportsConnection;
  /** 帖子所属的主题 */
  subject?: Maybe<Subject>;
  /** 按热度返回评论 */
  trendingComments: CommentsConnection;
  /** 该帖子所在的大学 */
  university?: Maybe<University>;
  /** 帖子的点赞 */
  votes: VotesConnection;
  /** 帖子的点赞 */
  votesWithRelay: VotesConnectionWithRelay;
};


export type PostCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PostFoldedCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostFoldedCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PostHashtagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type PostReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostTrendingCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostVotesWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type PostAndCommentUnion = Comment | Post;

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type PostPageInfo = {
  __typename?: 'PostPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  nodes: Array<Post>;
  totalCount: Scalars['Int'];
};

export type PostsConnectionWithRelay = {
  __typename?: 'PostsConnectionWithRelay';
  edges: Array<PostEdge>;
  pageInfo: PostPageInfo;
  totalCount: Scalars['Int'];
};

export type PrivateSettings = {
  __typename?: 'PrivateSettings';
  /** 性别是否公开 */
  isGenderPrivate?: Maybe<Scalars['Boolean']>;
  /** 年级是否公开 */
  isGradePrivate?: Maybe<Scalars['Boolean']>;
  /** 学院是否公开 */
  isInstitutePrivate?: Maybe<Scalars['Boolean']>;
  /** 校区是否公开 */
  isSubCampusPrivate?: Maybe<Scalars['Boolean']>;
  /** 学校是否公开 */
  isUniversityPrivate?: Maybe<Scalars['Boolean']>;
};

export type Privilege = {
  __typename?: 'Privilege';
  createdAt: Scalars['String'];
  /** 权限的创建者 */
  creator: Admin;
  id: Scalars['String'];
  /** 权限作用的对象 */
  to: AdminAndUserUnion;
  value: Iprivilege;
};

export type PrivilegeEdge = {
  __typename?: 'PrivilegeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Privilege>;
};

export type PrivilegePageInfo = {
  __typename?: 'PrivilegePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PrivilegesConnection = {
  __typename?: 'PrivilegesConnection';
  edges: Array<PrivilegeEdge>;
  pageInfo: PrivilegePageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** 以id获取管理员 */
  admin: Admin;
  /** 获取所有管理员 */
  admins: AdminsConnection;
  /** 指定时间段内认证的用户 */
  authenWithin: UsersConnectionWithRelay;
  autoSummarization: Scalars['String'];
  /** 所有的拉黑 */
  blocks: BlocksConnection;
  /** 文本审查的测试接口，测试一段文本是否违规 */
  censorText: CensorResponse;
  /** 以id获取一条评论 */
  comment: Comment;
  /** Relay版 以id获取某评论下所有评论 */
  commentCommentsWithRelay: CommentsConnectionWithRelay;
  /** 查询某时间段内发布的所有评论 */
  commentsCreatedWithin: CommentsConnection;
  /** 以id获取会话 */
  conversation: Conversation;
  /** 获取所有会话 */
  conversations: ConversationsConnection;
  /** 获取一个凭证 */
  credential: ICredential;
  /** 获取所有凭证 */
  credentials: ICredentialsConnection;
  /** 以 id 获取指定 deadline */
  deadline: Deadline;
  /** 以id获取删除 */
  delete: Delete;
  /** 获取所有被删除的评论 */
  deletedComments: CommentsConnection;
  /** 获取所有被删除的帖子 */
  deletedPosts: PostsConnection;
  /** 获取所有的删除 */
  deletes: DeletesConnection;
  /** 根据评论获取原帖子 */
  findOriginPostByCommentId: Post;
  /** 获取所有的折叠 */
  folds: FoldsConnection;
  /** 用户上传验证图片时，先过根据文件名获取临时上传凭证信息 */
  getAuthenUserImagesUploadCredentialInfo: ImagesUploadCredentialInfo;
  /** 用户上传头像时，先根据文件名获取临时上传凭证信息 */
  getAvatarImageUploadCredentialInfo: AvatarImageUploadCredentialInfo;
  /** 用户上传评论图片时，先根据文件名获取临时上传凭证信息 */
  getCommentImagesUploadCredentialInfo: ImagesUploadCredentialInfo;
  /** 用户上传帖子图片时，先根据文件名获取临时上传凭证信息 */
  getPostImagesUploadCredentialInfo: ImagesUploadCredentialInfo;
  /** 用户创建主题时，先根据文件名获取临时上传凭证 */
  getSubjectImagesUploadCredentialInfo: ImagesUploadCredentialInfo;
  getUnlimitedWXacode: Scalars['String'];
  getWXMiniProgrameShortLink: Scalars['String'];
  /** 通过 token 获取指定用户的微信公众号关注信息 https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId */
  getWXSubscriptionInfo: WxSubscriptionInfo;
  hashtag: Hashtag;
  hashtags: HashtagsConnection;
  institute: Institute;
  institutes: InstitutesConnection;
  keywordsExtraction: Array<KeywordsExtractionResult>;
  /** 以 id 获取指定课程 */
  lesson: Lesson;
  /** 获取最新的课程表元信息 */
  lessonMetaData: LessonMetaData;
  /** 获取当前用户上课通知的设置 */
  lessonNotificationSettings: LessonNotificationSettings;
  /** 获取所有的课程 */
  lessons: LessonsConnection;
  mention: Mention;
  mentions: MentionsConnection;
  /** 以id获取消息 */
  message: Message;
  /** 获取一个置顶信息 */
  pin: Pin;
  /** 获取全部置顶信息 */
  pins: PinsConnection;
  /** 以postId获取一个帖子 */
  post: Post;
  /**
   * relay分页版 以id获取某帖子下所有评论
   * @deprecated 请使用 Post.commentsWithRelay
   */
  postCommentsWithRelay: CommentsConnectionWithRelay;
  /**
   * 获取所有帖子
   * @deprecated 请使用postsWithRelay
   */
  posts: PostsConnection;
  /** 获取指定时间段内的帖子 */
  postsCreatedWithin: PostsConnection;
  /** Relay分页版的posts接口 */
  postsWithRelay: PostsConnectionWithRelay;
  /** 以id获取权限 */
  privilege: Privilege;
  /** 获取所有权限 */
  privileges: PrivilegesConnection;
  /** 指定时间段内注册的所有用户 */
  registerWithin: UsersConnection;
  /** 以id获取举报 */
  report: Report;
  /** 获取所有的举报 */
  reports: ReportsConnection;
  /** 获取所有的举报 */
  reportsWithRelay: ReportsConnectionWithRelay;
  /** 所有的角色 */
  roles: RolesConnection;
  /** 简单的搜索 */
  search: SearchResultItemConnection;
  /** 向小程序下发订阅消息 */
  sendSubscibeMessage: Scalars['String'];
  sendUniformMessage: Scalars['String'];
  /** 分析一段文本的情感 */
  sentimentAnalysis: SentimentAnalysisResult;
  subcampus: SubCampus;
  subcampuses: SubCampusesConnection;
  /** 以id获取主题 */
  subject: Subject;
  /**
   * Relay版 以id获取某主题下所有帖子
   * @deprecated 请使用 subjects.postsWithRelay
   */
  subjectPostsWithRelay: PostsConnectionWithRelay;
  /**
   * 获取所有主题
   * @deprecated 请使用 subjectsWithRelay
   */
  subjects: SubjectsConnection;
  /** 获取所有主题 */
  subjectsWithRelay: SubjectsConnectionWithRelay;
  textClassification: TextClassificationResult;
  /** @deprecated 请使用 trendingPostsWithRelay */
  trendingPosts: PostsConnection;
  /** 按热度获取所有帖子 */
  trendingPostsWithRelay: PostsConnectionWithRelay;
  universities: UniversitiesConnection;
  university: University;
  /** 以id获取用户 */
  user: User;
  /** 待通过审核的用户信息 */
  userAuthenInfos: UserAuthenInfosConnection;
  userCommentsWithRelay: CommentsConnectionWithRelay;
  /** 测试接口 */
  userPostsWithRelay: PostsConnectionWithRelay;
  /** 测试接口，某用户的所有回复通知，非当前用户获取到null */
  userReplyNotifications?: Maybe<NotificationsConnection>;
  /** 测试接口，获取某用户所有的点赞通知，非当前用户获取到null */
  userUpvoteNotifications?: Maybe<VoteWithUnreadCountsConnection>;
  /**
   * 获取所有用户
   * @deprecated 使用 usersWithRelay
   */
  users: UsersConnection;
  usersWithRelay: UsersConnectionWithRelay;
  /** 某段时间内的所有点赞 */
  votesCreatedWithin: VotesConnection;
  /** 当前id对应的的用户画像 */
  whoAmI: WhoAmIUnion;
};


export type QueryAdminArgs = {
  id: Scalars['String'];
};


export type QueryAdminsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryAuthenWithinArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endTime: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  startTime: Scalars['String'];
};


export type QueryAutoSummarizationArgs = {
  content: Scalars['String'];
  length?: InputMaybe<Scalars['Int']>;
};


export type QueryBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryCensorTextArgs = {
  content: Scalars['String'];
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCommentCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryCommentsCreatedWithinArgs = {
  endTime: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime: Scalars['String'];
};


export type QueryConversationArgs = {
  id: Scalars['String'];
};


export type QueryConversationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCredentialArgs = {
  credentialId: Scalars['String'];
};


export type QueryCredentialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryDeadlineArgs = {
  id: Scalars['String'];
};


export type QueryDeleteArgs = {
  deleteId: Scalars['String'];
};


export type QueryDeletedCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryDeletedPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryDeletesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryFindOriginPostByCommentIdArgs = {
  id: Scalars['String'];
};


export type QueryFoldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryGetAuthenUserImagesUploadCredentialInfoArgs = {
  fileNames: Array<Scalars['String']>;
};


export type QueryGetAvatarImageUploadCredentialInfoArgs = {
  fileName: Scalars['String'];
};


export type QueryGetCommentImagesUploadCredentialInfoArgs = {
  fileNames: Array<Scalars['String']>;
};


export type QueryGetPostImagesUploadCredentialInfoArgs = {
  fileNames: Array<Scalars['String']>;
};


export type QueryGetSubjectImagesUploadCredentialInfoArgs = {
  fileNames: Array<Scalars['String']>;
};


export type QueryGetUnlimitedWXacodeArgs = {
  auto_color?: InputMaybe<Scalars['Boolean']>;
  check_path?: InputMaybe<Scalars['Boolean']>;
  env_version?: InputMaybe<Scalars['String']>;
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  is_hyaline?: InputMaybe<Scalars['Boolean']>;
  line_color?: InputMaybe<GetUnlimitedWXacodeArgsLineColor>;
  page?: InputMaybe<Scalars['String']>;
  scene: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWxMiniProgrameShortLinkArgs = {
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  is_permanent?: InputMaybe<Scalars['Boolean']>;
  page_title: Scalars['String'];
  page_url: Scalars['String'];
};


export type QueryGetWxSubscriptionInfoArgs = {
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  lang?: InputMaybe<Wx_Subscribe_Info_Lang>;
  openid: Scalars['String'];
};


export type QueryHashtagArgs = {
  id: Scalars['String'];
};


export type QueryHashtagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryInstituteArgs = {
  id: Scalars['String'];
};


export type QueryInstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryKeywordsExtractionArgs = {
  content: Scalars['String'];
  keywordNum?: InputMaybe<Scalars['Int']>;
};


export type QueryLessonArgs = {
  id: Scalars['String'];
};


export type QueryLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryMentionArgs = {
  id: Scalars['String'];
};


export type QueryMentionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryMessageArgs = {
  id: Scalars['String'];
};


export type QueryPinArgs = {
  id: Scalars['String'];
};


export type QueryPinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPostCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPostsCreatedWithinArgs = {
  endTime: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime: Scalars['String'];
};


export type QueryPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  universityId?: InputMaybe<Scalars['String']>;
};


export type QueryPrivilegeArgs = {
  id: Scalars['String'];
};


export type QueryPrivilegesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryRegisterWithinArgs = {
  endTime: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime: Scalars['String'];
};


export type QueryReportArgs = {
  id: Scalars['String'];
};


export type QueryReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryReportsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  query: Scalars['String'];
  type: Searchtype;
};


export type QuerySendSubscibeMessageArgs = {
  data: Scalars['String'];
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  lang?: InputMaybe<Scalars['String']>;
  miniprograme_state?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  template_id: Scalars['String'];
  touser: Scalars['String'];
};


export type QuerySendUniformMessageArgs = {
  grantType?: InputMaybe<Code2Session_Grant_Type>;
  mp_template_msg: MpTemplateMsg;
  touser: Scalars['String'];
  weapp_template_msg?: InputMaybe<WeappTemplateMsg>;
};


export type QuerySentimentAnalysisArgs = {
  content: Scalars['String'];
};


export type QuerySubcampusArgs = {
  id: Scalars['String'];
};


export type QuerySubcampusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QuerySubjectArgs = {
  id: Scalars['String'];
};


export type QuerySubjectPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QuerySubjectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerySubjectsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  universityId?: InputMaybe<Scalars['String']>;
};


export type QueryTextClassificationArgs = {
  content: Scalars['String'];
};


export type QueryTrendingPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryTrendingPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryUniversitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryUniversityArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserAuthenInfosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryUserCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryUserPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type QueryUserReplyNotificationsArgs = {
  actions?: InputMaybe<Array<Notification_Action>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type QueryUserUpvoteNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  universityId?: InputMaybe<Scalars['String']>;
};


export type QueryVotesCreatedWithinArgs = {
  endTime: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime: Scalars['String'];
};

export enum Report_State {
  Close = 'CLOSE',
  Open = 'OPEN',
  Pending = 'PENDING'
}

export enum Report_Type {
  Fraud = 'FRAUD',
  LewdHarass = 'LEWD_HARASS',
  Other = 'OTHER'
}

export type ReplyNotification = Notifiable & {
  __typename?: 'ReplyNotification';
  /** 通知涉及的对象：用户User A 对帖子 Post或评论Comment B 发布了评论 Comment C，则C是about；用户User A点赞帖子Post 或评论Comment B则B是about */
  about: PostAndCommentUnion;
  /** 通知涉及的操作 */
  action: Notification_Action;
  /** 通知的创建时间 */
  createdAt: Scalars['String'];
  /** 通知的创建者，匿名评论时为空 */
  creator?: Maybe<User>;
  /** 通知的id */
  id: Scalars['String'];
  /** 是否已读 */
  isRead: Scalars['Boolean'];
  /** 被通知的对象 */
  to: User;
};

export type Report = Node & {
  __typename?: 'Report';
  /** 举报所在的会话 */
  conversation: Conversation;
  createdAt: Scalars['String'];
  /** 举报的创建者 */
  creator: User;
  description: Scalars['String'];
  id: Scalars['String'];
  state: Report_State;
  /** 被举报的对象 */
  to: Report2Union;
  type: Report_Type;
};

export type Report2Union = Comment | Post | User;

export type ReportEdge = {
  __typename?: 'ReportEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Report>;
};

export type ReportPageInfo = {
  __typename?: 'ReportPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ReportsConnection = {
  __typename?: 'ReportsConnection';
  nodes: Array<Report>;
  totalCount: Scalars['Int'];
};

export type ReportsConnectionWithRelay = {
  __typename?: 'ReportsConnectionWithRelay';
  edges: Array<ReportEdge>;
  pageInfo: ReportPageInfo;
  totalCount: Scalars['Int'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String'];
  /** 角色的创建者 */
  creator: Admin;
  id: Scalars['String'];
  title: Scalars['String'];
  /** 具有该角色的所有用户 */
  users: UsersConnectionWithRelay;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Role>;
};

export type RolePageInfo = {
  __typename?: 'RolePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type RolesConnection = {
  __typename?: 'RolesConnection';
  edges: Array<RoleEdge>;
  pageInfo: RolePageInfo;
  totalCount: Scalars['Int'];
};

export enum Searchtype {
  Comment = 'COMMENT',
  /** 学院 */
  Institute = 'INSTITUTE',
  /** 评论 */
  Post = 'POST',
  /** 校区 */
  Subcampus = 'SUBCAMPUS',
  /** 主题 */
  Subject = 'SUBJECT',
  /** 大学 */
  University = 'UNIVERSITY',
  /** 用户 */
  User = 'USER'
}

export type SearchResultItem = Comment | Institute | Post | SubCampus | Subject | University | User;

export type SearchResultItemConnection = {
  __typename?: 'SearchResultItemConnection';
  edges: Array<SearchResultItemEdge>;
  pageInfo: SearchResultItemPageInfo;
  totalCount: Scalars['Int'];
};

export type SearchResultItemEdge = {
  __typename?: 'SearchResultItemEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<SearchResultItem>;
};

export type SearchResultItemPageInfo = {
  __typename?: 'SearchResultItemPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type SentimentAnalysisResult = {
  __typename?: 'SentimentAnalysisResult';
  /** 负面分数 */
  negative: Scalars['Float'];
  /** 中性分数 */
  neutral: Scalars['Float'];
  /** 正面分数 */
  positive: Scalars['Float'];
  /** 文本情感 */
  sentiment: Nlp_Sentiment;
};

export type SetDbSchema = {
  __typename?: 'SetDbSchema';
  array: Array<Scalars['String']>;
  arrayIndexOffset: Scalars['Int'];
  convertedPrimitiveFields_: Scalars['String'];
  messageId_?: Maybe<Scalars['String']>;
  pivot_: Scalars['Float'];
  wrappers_?: Maybe<Scalars['String']>;
};

export type SubCampus = {
  __typename?: 'SubCampus';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  university: University;
};

export type SubCampusEdge = {
  __typename?: 'SubCampusEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<SubCampus>;
};

export type SubCampusPageInfo = {
  __typename?: 'SubCampusPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type SubCampusesConnection = {
  __typename?: 'SubCampusesConnection';
  edges: Array<SubCampusEdge>;
  pageInfo: SubCampusPageInfo;
  totalCount: Scalars['Int'];
};

export type Subject = {
  __typename?: 'Subject';
  avatarImageUrl: Scalars['String'];
  backgroundImageUrl: Scalars['String'];
  createdAt: Scalars['String'];
  /** 主题的创建者 */
  creator: User;
  description: Scalars['String'];
  id: Scalars['String'];
  /**
   * 当前主题中的所有帖子
   * @deprecated 请使用 postsWithRelay
   */
  posts: PostsConnection;
  postsWithRelay: PostsConnectionWithRelay;
  title: Scalars['String'];
  /** 具有该 Subject 的所有大学 */
  universities: UniversitiesConnection;
};


export type SubjectPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type SubjectPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type SubjectUniversitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type SubjectEdge = {
  __typename?: 'SubjectEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Subject>;
};

export type SubjectPageInfo = {
  __typename?: 'SubjectPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type SubjectsConnection = {
  __typename?: 'SubjectsConnection';
  nodes: Array<Subject>;
  totalCount: Scalars['Int'];
};

export type SubjectsConnectionWithRelay = {
  __typename?: 'SubjectsConnectionWithRelay';
  edges: Array<SubjectEdge>;
  pageInfo: SubjectPageInfo;
  totalCount: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** 监听置顶帖子或评论的评论 */
  addCommented: Comment;
  /** 监听当前用户接收到的通知 */
  notificationsAdded: UpvoteNotificationAndReplyNotificationUnion;
  /** 监听指定帖子或评论的点赞数 */
  votesChanged: PostAndCommentUnion;
};


export type SubscriptionAddCommentedArgs = {
  ids: Array<Scalars['String']>;
};


export type SubscriptionNotificationsAddedArgs = {
  id: Scalars['String'];
};


export type SubscriptionVotesChangedArgs = {
  ids: Array<Scalars['String']>;
};

export enum Task_Type {
  /** 晚上10点的提醒 */
  Gf = 'GF',
  /** 早上8点的提醒 */
  Gm = 'GM'
}

export type TemplateValue = {
  value: Scalars['String'];
};

export type TextClassificationResult = {
  __typename?: 'TextClassificationResult';
  fifthClassName?: Maybe<Scalars['String']>;
  fifthClassProbability?: Maybe<Scalars['Float']>;
  firstClassName?: Maybe<Scalars['String']>;
  firstClassProbability?: Maybe<Scalars['Float']>;
  fourthClassName?: Maybe<Scalars['String']>;
  fourthClassProbability?: Maybe<Scalars['Float']>;
  secondClassName?: Maybe<Scalars['String']>;
  secondClassProbability?: Maybe<Scalars['Float']>;
  thirdClassName?: Maybe<Scalars['String']>;
  thirdClassProbability?: Maybe<Scalars['Float']>;
};

export type UniversitiesConnection = {
  __typename?: 'UniversitiesConnection';
  edges: Array<UniversityEdge>;
  pageInfo: UniversityPageInfo;
  totalCount: Scalars['Int'];
};

export type University = {
  __typename?: 'University';
  createdAt: Scalars['String'];
  /** 大学的唯一id */
  id: Scalars['String'];
  /** 该大学的所有学院 */
  institutes: InstitutesConnection;
  /** 该大学的 logo */
  logoUrl: Scalars['String'];
  /** 该大学的名字 */
  name: Scalars['String'];
  /** 该大学拥有的所有 Post */
  posts: PostsConnectionWithRelay;
  /** 该大学的所有校区 */
  subcampuses: SubCampusesConnection;
  /** 该大学拥有的所有 Subject */
  subjects: SubjectsConnectionWithRelay;
  /** 该大学内的所有 User */
  users: UsersConnectionWithRelay;
};


export type UniversityInstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UniversityPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UniversitySubcampusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UniversitySubjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UniversityUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type UniversityEdge = {
  __typename?: 'UniversityEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<University>;
};

export type UniversityPageInfo = {
  __typename?: 'UniversityPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UpdatePasswordResultUnion = Admin | User;

export type UpvoteNotification = Notifiable & {
  __typename?: 'UpvoteNotification';
  /** 通知涉及的对象：用户User A 对帖子 Post或评论Comment B 发布了评论 Comment C，则C是about；用户User A点赞帖子Post 或评论Comment B则B是about */
  about: PostAndCommentUnion;
  action: Notification_Action;
  /** 通知的创建时间 */
  createdAt: Scalars['String'];
  /** 通知的创建者，匿名评论时为空 */
  creator?: Maybe<User>;
  /** 通知的id */
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  /** 被通知的对象 */
  to: User;
};

export type UpvoteNotificationAndReplyNotificationUnion = ReplyNotification | UpvoteNotification;

export type User = Node & Person & {
  __typename?: 'User';
  /** 当前用户提交的认证信息 */
  authenInfo?: Maybe<UserAuthenInfo>;
  /** 用户头像链接 */
  avatarImageUrl?: Maybe<Scalars['String']>;
  /**
   * 学院
   * @deprecated feature/multiuniversity 后废弃，请使用 institutes 代替
   */
  college?: Maybe<Scalars['String']>;
  /** 当前用户发布的评论 */
  comments: CommentsConnection;
  commentsWithRelay: CommentsConnectionWithRelay;
  /** 当前用户创建的所有会话 */
  conversations: ConversationsConnection;
  /** 用户创建时间 */
  createdAt: Scalars['String'];
  /** 当前用户的认证凭证，未认证用户为null */
  credential?: Maybe<ICredential>;
  /** 当前用户的deadlines */
  deadlines: DeadlinesConnection;
  /** 用户性别 */
  gender?: Maybe<Gender>;
  /** 年级 */
  grade?: Maybe<Scalars['String']>;
  /** id 自动生成 */
  id: Scalars['String'];
  /** 当前用户所属的学院 */
  institutes?: Maybe<InstitutesConnection>;
  /** 用户上一次调用login接口获取token的系统时间 */
  lastLoginedAt: Scalars['String'];
  /** 获取当前用户上课通知的设置 */
  lessonNotificationSettings: LessonNotificationSettings;
  /** 当前用户的所有课程 */
  lessons: LessonsConnection;
  /** 用户昵称 */
  name: Scalars['String'];
  /** 微信openId,注册时传入微信code自动通过微信提供的接口获取获取 */
  openId: Scalars['String'];
  /** 当前用户创建的所有帖子 */
  posts: PostsConnection;
  postsWithRelay: PostsConnectionWithRelay;
  /** 当前用户的隐私设定 */
  privateSettings?: Maybe<PrivateSettings>;
  /** 当前用户具有的权限 */
  privileges: PrivilegesConnection;
  /** 回复的通知 */
  replyNotifications?: Maybe<NotificationsConnection>;
  /** 当前用户收到的所有举报 */
  reports: ReportsConnection;
  /** 当前用户的所有角色 */
  roles: RolesConnection;
  /**
   * 学校
   * @deprecated feature/multiuniversity 后废弃，请使用 university 代替
   */
  school?: Maybe<Scalars['String']>;
  /** 学号 */
  studentId?: Maybe<Scalars['Int']>;
  /**
   * 校区
   * @deprecated feature/multiuniversity 后废弃，请使用 subCampuses 代替
   */
  subCampus?: Maybe<Scalars['String']>;
  /** 当前用户所属的校区 */
  subCampuses?: Maybe<SubCampusesConnection>;
  /** 当前用户创建的所有主题 */
  subjects: SubjectsConnection;
  /** 微信unionId,注册时传入微信code自动通过微信提供的接口获取获取 */
  unionId: Scalars['String'];
  /** 当前用户所在的大学 */
  university?: Maybe<University>;
  /** 用户信息的更新时间 */
  updatedAt: Scalars['String'];
  /** 点赞的通知 */
  upvoteNotifications?: Maybe<VoteWithUnreadCountsConnection>;
  /** 用户账号 */
  userId: Scalars['String'];
  /** 当前用户的所有点赞 */
  votes: VotesConnection;
  /** 当前用户的所有点赞 */
  votesWithRelay: VotesConnectionWithRelay;
};


export type UserCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserCommentsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserConversationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserDeadlinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserInstitutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endYear: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  semester: Scalars['Int'];
  startYear: Scalars['Int'];
};


export type UserPostsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserPostsWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserPrivilegesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserReplyNotificationsArgs = {
  actions?: InputMaybe<Array<Notification_Action>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type UserReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserSubCampusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};


export type UserSubjectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserUpvoteNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
  type?: InputMaybe<Notification_Type>;
};


export type UserVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserVotesWithRelayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type UserAuthenInfo = Authenable & {
  __typename?: 'UserAuthenInfo';
  /** 头像 */
  avatarImageUrl: Scalars['String'];
  /**
   * 学院
   * @deprecated feature/multiuniversity 中被弃用，请使用 institutes 代替
   */
  college?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 审核信息的删除者 */
  delete?: Maybe<Delete>;
  /** 性别 */
  gender: Gender;
  /** 年级 */
  grade: Scalars['String'];
  id: Scalars['String'];
  /** bug: 图片乱序，有效信息图片(e.g. 校园卡照片)的链接 */
  images?: Maybe<Array<Scalars['String']>>;
  /** 用户申请的角色 */
  roles: RolesConnection;
  /**
   * 学校
   * @deprecated feature/multiuniversity 中被弃用，请使用 universities 代替
   */
  school?: Maybe<Scalars['String']>;
  /** 学号 */
  studentId: Scalars['Float'];
  /**
   * 校区
   * @deprecated feature/multiuniversity 中被弃用，请使用 subCampuses 代替
   */
  subCampus?: Maybe<Scalars['String']>;
  /** 提交信息的用户 */
  to: User;
};


export type UserAuthenInfoRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_By>;
};

export type UserAuthenInfoEdge = {
  __typename?: 'UserAuthenInfoEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserAuthenInfo>;
};

export type UserAuthenInfoPageInfo = {
  __typename?: 'UserAuthenInfoPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserAuthenInfosConnection = {
  __typename?: 'UserAuthenInfosConnection';
  edges: Array<UserAuthenInfoEdge>;
  pageInfo: UserAuthenInfoPageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<User>;
};

export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  nodes: Array<User>;
  totalCount: Scalars['Int'];
};

export type UsersConnectionWithRelay = {
  __typename?: 'UsersConnectionWithRelay';
  edges: Array<UserEdge>;
  pageInfo: UserPageInfo;
  totalCount: Scalars['Int'];
};

export type View = {
  __typename?: 'View';
  createdAt: Scalars['String'];
  id: Scalars['String'];
};

export type Vote = VoteInterface & {
  __typename?: 'Vote';
  createdAt: Scalars['String'];
  /** 点赞的创建者 */
  creator: User;
  id: Scalars['String'];
  /** 被点赞的对象 */
  to: PostAndCommentUnion;
};

export type VoteEdge = {
  __typename?: 'VoteEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Vote>;
};

export type VoteInterface = {
  /** 点赞的创建者 */
  creator: User;
  id: Scalars['String'];
  /** 被点赞的对象 */
  to: PostAndCommentUnion;
};

export type VotePageInfo = {
  __typename?: 'VotePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type VoteWithUnreadCount = VoteInterface & {
  __typename?: 'VoteWithUnreadCount';
  createdAt: Scalars['String'];
  /** 点赞的创建者 */
  creator: User;
  id: Scalars['String'];
  /** 被点赞的对象 */
  to: PostAndCommentUnion;
  unreadCount: Scalars['Int'];
};

export type VoteWithUnreadCountEdge = {
  __typename?: 'VoteWithUnreadCountEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VoteWithUnreadCount>;
};

export type VoteWithUnreadCountPageInfo = {
  __typename?: 'VoteWithUnreadCountPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type VoteWithUnreadCountsConnection = {
  __typename?: 'VoteWithUnreadCountsConnection';
  edges: Array<VoteWithUnreadCountEdge>;
  pageInfo: VoteWithUnreadCountPageInfo;
  totalCount: Scalars['Int'];
};

export type VotesConnection = {
  __typename?: 'VotesConnection';
  nodes: Array<Vote>;
  totalCount: Scalars['Int'];
  viewerCanUpvote: Scalars['Boolean'];
  viewerHasUpvoted: Scalars['Boolean'];
};

export type VotesConnectionWithRelay = {
  __typename?: 'VotesConnectionWithRelay';
  edges?: Maybe<Array<VoteEdge>>;
  pageInfo?: Maybe<VotePageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
  viewerCanUpvote: Scalars['Boolean'];
  viewerHasUpvoted: Scalars['Boolean'];
};

export enum Wx_Subscribe_Info_Lang {
  En = 'EN',
  ZhCn = 'ZH_CN',
  ZhTw = 'ZH_TW'
}

export enum Wx_Subscribe_Scene {
  /** 公众号迁移 */
  AddSceneAccountMigration = 'ADD_SCENE_ACCOUNT_MIGRATION',
  /** 视频号 */
  AddSceneChannels = 'ADD_SCENE_CHANNELS',
  /** 视频号直播 */
  AddSceneLivestream = 'ADD_SCENE_LIVESTREAM',
  /** 其他 */
  AddSceneOthers = 'ADD_SCENE_OTHERS',
  /** 支付后关注 */
  AddScenePaid = 'ADD_SCENE_PAID',
  /** 名片分享 */
  AddSceneProfileCard = 'ADD_SCENE_PROFILE_CARD',
  /** 图文页右上角菜单 */
  AddSceneProfileItem = 'ADD_SCENE_PROFILE_ITEM',
  /** 图文页内名称点击 */
  AddSceneProfileLink = 'ADD_SCENE_PROFILE_LINK',
  /** 扫描二维码 */
  AddSceneQrCode = 'ADD_SCENE_QR_CODE',
  /** 他人转载 */
  AddSceneReprint = 'ADD_SCENE_REPRINT',
  /** 公众号搜索 */
  AddSceneSearch = 'ADD_SCENE_SEARCH',
  /** 微信广告 */
  AddSceneWechatAdvertisement = 'ADD_SCENE_WECHAT_ADVERTISEMENT'
}

export type WeappTemplateMsg = {
  /** 小程序模板数据 */
  data: Scalars['String'];
  /** 小程序模板放大关键词 */
  emphasis_keyword: Scalars['String'];
  /** 小程序模板消息formid */
  form_id: Scalars['String'];
  /** 小程序页面路径 */
  page: Scalars['String'];
  /** 小程序模板ID */
  template_id: Scalars['String'];
};

export type WhoAmIUnion = Admin | User;

export type WxSubscriptionInfo = {
  __typename?: 'WxSubscriptionInfo';
  /** 用户所在的分组ID（兼容旧的用户分组接口） */
  groupid: Scalars['String'];
  /** 用户的语言，简体中文为zh_CN */
  language: Scalars['String'];
  /** 用户的标识，对当前公众号唯一 */
  openid: Scalars['String'];
  /** 公众号运营者对粉丝的备注，公众号运营者可在微信公众平台用户管理界面对粉丝添加备注 */
  remark: Scalars['String'];
  /** 用户是否订阅该公众号标识，值为0时，代表此用户没有关注该公众号，拉取不到其余信息。 */
  subscribe: Scalars['Int'];
  /** 返回用户关注的渠道来源 */
  subscribe_scene: Wx_Subscribe_Scene;
  /** 用户关注时间，为时间戳。如果用户曾多次关注，则取最后关注时间 */
  subscribe_time: Scalars['Int'];
  /** 用户被打上的标签ID列表 */
  tagid_list: Array<Scalars['Int']>;
  /** 只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。 */
  unionid: Scalars['String'];
};

export type AddUpvoteOnPostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type AddUpvoteOnPostMutation = { __typename?: 'Mutation', addUpvoteOnPost: { __typename?: 'Post', id: string } };

export type AddUpvoteOnCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
}>;


export type AddUpvoteOnCommentMutation = { __typename?: 'Mutation', addUpvoteOnComment: { __typename?: 'Comment', id: string } };

export type LoginByCodeMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type LoginByCodeMutation = { __typename?: 'Mutation', loginByCode: { __typename?: 'LoginResult', token: string, id: string } };

export type LoginByUserIdMutationVariables = Exact<{
  userId: Scalars['String'];
  sign: Scalars['String'];
}>;


export type LoginByUserIdMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', token: string, id: string } };

export type PostsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type PostsQuery = { __typename?: 'Query', postsWithRelay: { __typename?: 'PostsConnectionWithRelay', totalCount: number, pageInfo: { __typename?: 'PostPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'PostEdge', node?: { __typename?: 'Post', id: string, content: string, createdAt: string, images: Array<string | null>, creator?: { __typename?: 'User', id: string, name: string, avatarImageUrl?: string | null } | null, anonymous?: { __typename?: 'Anonymous', id: string, subCampus?: string | null, watermark: string } | null, commentsWithRelay: { __typename?: 'CommentsConnectionWithRelay', totalCount: number }, votesWithRelay: { __typename?: 'VotesConnectionWithRelay', totalCount?: number | null, viewerCanUpvote: boolean, viewerHasUpvoted: boolean } } | null }> } };

export type PostVotesQueryVariables = Exact<{
  id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type PostVotesQuery = { __typename?: 'Query', post: { __typename?: 'Post', votesWithRelay: { __typename?: 'VotesConnectionWithRelay', totalCount?: number | null, pageInfo?: { __typename?: 'VotePageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } | null, edges?: Array<{ __typename?: 'VoteEdge', node?: { __typename?: 'Vote', id: string, creator: { __typename?: 'User', id: string, name: string, avatarImageUrl?: string | null } } | null }> | null } } };

export type UniversitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type UniversitiesQuery = { __typename?: 'Query', universities: { __typename?: 'UniversitiesConnection', totalCount: number, pageInfo: { __typename?: 'UniversityPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'UniversityEdge', node?: { __typename?: 'University', id: string, name: string, createdAt: string, logoUrl: string, subcampuses: { __typename?: 'SubCampusesConnection', totalCount: number }, institutes: { __typename?: 'InstitutesConnection', totalCount: number } } | null }> } };

export type UniversityQueryVariables = Exact<{
  id: Scalars['String'];
  institutesFirst?: InputMaybe<Scalars['Int']>;
  institutesAfter?: InputMaybe<Scalars['String']>;
  subcampusesFirst?: InputMaybe<Scalars['Int']>;
  subcampusesAfter?: InputMaybe<Scalars['String']>;
  subjectsFirst?: InputMaybe<Scalars['Int']>;
  subjectsAfter?: InputMaybe<Scalars['String']>;
  usersFirst?: InputMaybe<Scalars['Int']>;
  usersAfter?: InputMaybe<Scalars['String']>;
  postsFirst?: InputMaybe<Scalars['Int']>;
  postsAfter?: InputMaybe<Scalars['String']>;
}>;


export type UniversityQuery = { __typename?: 'Query', university: { __typename?: 'University', id: string, name: string, logoUrl: string, posts: { __typename?: 'PostsConnectionWithRelay', totalCount: number, pageInfo: { __typename?: 'PostPageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'PostEdge', node?: { __typename?: 'Post', id: string, content: string, createdAt: string, images: Array<string | null>, creator?: { __typename?: 'User', id: string, name: string, avatarImageUrl?: string | null } | null, anonymous?: { __typename?: 'Anonymous', id: string, subCampus?: string | null, watermark: string } | null, commentsWithRelay: { __typename?: 'CommentsConnectionWithRelay', totalCount: number }, votesWithRelay: { __typename?: 'VotesConnectionWithRelay', totalCount?: number | null, viewerHasUpvoted: boolean, viewerCanUpvote: boolean } } | null }> }, users: { __typename?: 'UsersConnectionWithRelay', totalCount: number, pageInfo: { __typename?: 'UserPageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', id: string, name: string, avatarImageUrl?: string | null, createdAt: string, credential?: { __typename?: 'ICredential', id: string } | null } | null }> }, subjects: { __typename?: 'SubjectsConnectionWithRelay', totalCount: number, pageInfo: { __typename?: 'SubjectPageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'SubjectEdge', node?: { __typename?: 'Subject', id: string, title: string } | null }> }, institutes: { __typename?: 'InstitutesConnection', totalCount: number, pageInfo: { __typename?: 'InstitutePageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'InstituteEdge', node?: { __typename?: 'Institute', id: string, name: string } | null }> }, subcampuses: { __typename?: 'SubCampusesConnection', totalCount: number, pageInfo: { __typename?: 'SubCampusPageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'SubCampusEdge', node?: { __typename?: 'SubCampus', id: string, name: string } | null }> } } };

export type CreateUniversityMutationVariables = Exact<{
  name: Scalars['String'];
  logoUrl: Scalars['String'];
}>;


export type CreateUniversityMutation = { __typename?: 'Mutation', createUniversity: { __typename?: 'University', id: string, name: string } };

export type UserautheninfosQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type UserautheninfosQuery = { __typename?: 'Query', userAuthenInfos: { __typename?: 'UserAuthenInfosConnection', totalCount: number, pageInfo: { __typename?: 'UserAuthenInfoPageInfo', hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'UserAuthenInfoEdge', node?: { __typename?: 'UserAuthenInfo', id: string, avatarImageUrl: string, to: { __typename?: 'User', id: string, name: string } } | null }> } };

export type UsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type UsersQuery = { __typename?: 'Query', usersWithRelay: { __typename?: 'UsersConnectionWithRelay', totalCount: number, pageInfo: { __typename?: 'UserPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null }, edges: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', id: string, name: string, createdAt: string, avatarImageUrl?: string | null, credential?: { __typename?: 'ICredential', id: string } | null } | null }> } };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'Admin', id: string, name: string, createdAt: string, lastLoginedAt: string, userId: string, avatarImageUrl?: string | null } | { __typename?: 'User', id: string, name: string, createdAt: string, lastLoginedAt: string, userId: string, avatarImageUrl?: string | null } };


export const AddUpvoteOnPostDocument = gql`
    mutation addUpvoteOnPost($postId: String!) {
  addUpvoteOnPost(postId: $postId) {
    id
  }
}
    `;
export type AddUpvoteOnPostMutationFn = Apollo.MutationFunction<AddUpvoteOnPostMutation, AddUpvoteOnPostMutationVariables>;

/**
 * __useAddUpvoteOnPostMutation__
 *
 * To run a mutation, you first call `useAddUpvoteOnPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUpvoteOnPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUpvoteOnPostMutation, { data, loading, error }] = useAddUpvoteOnPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddUpvoteOnPostMutation(baseOptions?: Apollo.MutationHookOptions<AddUpvoteOnPostMutation, AddUpvoteOnPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUpvoteOnPostMutation, AddUpvoteOnPostMutationVariables>(AddUpvoteOnPostDocument, options);
      }
export type AddUpvoteOnPostMutationHookResult = ReturnType<typeof useAddUpvoteOnPostMutation>;
export type AddUpvoteOnPostMutationResult = Apollo.MutationResult<AddUpvoteOnPostMutation>;
export type AddUpvoteOnPostMutationOptions = Apollo.BaseMutationOptions<AddUpvoteOnPostMutation, AddUpvoteOnPostMutationVariables>;
export const AddUpvoteOnCommentDocument = gql`
    mutation addUpvoteOnComment($commentId: String!) {
  addUpvoteOnComment(commentId: $commentId) {
    id
  }
}
    `;
export type AddUpvoteOnCommentMutationFn = Apollo.MutationFunction<AddUpvoteOnCommentMutation, AddUpvoteOnCommentMutationVariables>;

/**
 * __useAddUpvoteOnCommentMutation__
 *
 * To run a mutation, you first call `useAddUpvoteOnCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUpvoteOnCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUpvoteOnCommentMutation, { data, loading, error }] = useAddUpvoteOnCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useAddUpvoteOnCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddUpvoteOnCommentMutation, AddUpvoteOnCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUpvoteOnCommentMutation, AddUpvoteOnCommentMutationVariables>(AddUpvoteOnCommentDocument, options);
      }
export type AddUpvoteOnCommentMutationHookResult = ReturnType<typeof useAddUpvoteOnCommentMutation>;
export type AddUpvoteOnCommentMutationResult = Apollo.MutationResult<AddUpvoteOnCommentMutation>;
export type AddUpvoteOnCommentMutationOptions = Apollo.BaseMutationOptions<AddUpvoteOnCommentMutation, AddUpvoteOnCommentMutationVariables>;
export const LoginByCodeDocument = gql`
    mutation loginByCode($code: String!) {
  loginByCode(code: $code) {
    token
    id
  }
}
    `;
export type LoginByCodeMutationFn = Apollo.MutationFunction<LoginByCodeMutation, LoginByCodeMutationVariables>;

/**
 * __useLoginByCodeMutation__
 *
 * To run a mutation, you first call `useLoginByCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginByCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginByCodeMutation, { data, loading, error }] = useLoginByCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginByCodeMutation(baseOptions?: Apollo.MutationHookOptions<LoginByCodeMutation, LoginByCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginByCodeMutation, LoginByCodeMutationVariables>(LoginByCodeDocument, options);
      }
export type LoginByCodeMutationHookResult = ReturnType<typeof useLoginByCodeMutation>;
export type LoginByCodeMutationResult = Apollo.MutationResult<LoginByCodeMutation>;
export type LoginByCodeMutationOptions = Apollo.BaseMutationOptions<LoginByCodeMutation, LoginByCodeMutationVariables>;
export const LoginByUserIdDocument = gql`
    mutation loginByUserId($userId: String!, $sign: String!) {
  login(userId: $userId, sign: $sign) {
    token
    id
  }
}
    `;
export type LoginByUserIdMutationFn = Apollo.MutationFunction<LoginByUserIdMutation, LoginByUserIdMutationVariables>;

/**
 * __useLoginByUserIdMutation__
 *
 * To run a mutation, you first call `useLoginByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginByUserIdMutation, { data, loading, error }] = useLoginByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      sign: // value for 'sign'
 *   },
 * });
 */
export function useLoginByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<LoginByUserIdMutation, LoginByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginByUserIdMutation, LoginByUserIdMutationVariables>(LoginByUserIdDocument, options);
      }
export type LoginByUserIdMutationHookResult = ReturnType<typeof useLoginByUserIdMutation>;
export type LoginByUserIdMutationResult = Apollo.MutationResult<LoginByUserIdMutation>;
export type LoginByUserIdMutationOptions = Apollo.BaseMutationOptions<LoginByUserIdMutation, LoginByUserIdMutationVariables>;
export const PostsDocument = gql`
    query Posts($first: Int, $after: String) {
  postsWithRelay(first: $first, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        content
        createdAt
        images
        creator {
          id
          name
          avatarImageUrl
        }
        anonymous {
          id
          subCampus
          watermark
        }
        commentsWithRelay {
          totalCount
        }
        votesWithRelay {
          totalCount
          viewerCanUpvote
          viewerHasUpvoted
        }
      }
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostVotesDocument = gql`
    query PostVotes($id: String!, $after: String, $first: Int) {
  post(id: $id) {
    votesWithRelay(first: $first, after: $after) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          creator {
            id
            name
            avatarImageUrl
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePostVotesQuery__
 *
 * To run a query within a React component, call `usePostVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostVotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function usePostVotesQuery(baseOptions: Apollo.QueryHookOptions<PostVotesQuery, PostVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostVotesQuery, PostVotesQueryVariables>(PostVotesDocument, options);
      }
export function usePostVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostVotesQuery, PostVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostVotesQuery, PostVotesQueryVariables>(PostVotesDocument, options);
        }
export type PostVotesQueryHookResult = ReturnType<typeof usePostVotesQuery>;
export type PostVotesLazyQueryHookResult = ReturnType<typeof usePostVotesLazyQuery>;
export type PostVotesQueryResult = Apollo.QueryResult<PostVotesQuery, PostVotesQueryVariables>;
export const UniversitiesDocument = gql`
    query Universities($first: Int, $after: String) {
  universities(first: $first, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        createdAt
        logoUrl
        subcampuses {
          totalCount
        }
        institutes {
          totalCount
        }
      }
    }
  }
}
    `;

/**
 * __useUniversitiesQuery__
 *
 * To run a query within a React component, call `useUniversitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniversitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniversitiesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUniversitiesQuery(baseOptions?: Apollo.QueryHookOptions<UniversitiesQuery, UniversitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UniversitiesQuery, UniversitiesQueryVariables>(UniversitiesDocument, options);
      }
export function useUniversitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniversitiesQuery, UniversitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UniversitiesQuery, UniversitiesQueryVariables>(UniversitiesDocument, options);
        }
export type UniversitiesQueryHookResult = ReturnType<typeof useUniversitiesQuery>;
export type UniversitiesLazyQueryHookResult = ReturnType<typeof useUniversitiesLazyQuery>;
export type UniversitiesQueryResult = Apollo.QueryResult<UniversitiesQuery, UniversitiesQueryVariables>;
export const UniversityDocument = gql`
    query University($id: String!, $institutesFirst: Int, $institutesAfter: String, $subcampusesFirst: Int, $subcampusesAfter: String, $subjectsFirst: Int, $subjectsAfter: String, $usersFirst: Int, $usersAfter: String, $postsFirst: Int, $postsAfter: String) {
  university(id: $id) {
    id
    name
    logoUrl
    posts(first: $postsFirst, after: $postsAfter) {
      totalCount
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
      edges {
        node {
          id
          content
          createdAt
          images
          creator {
            id
            name
            avatarImageUrl
          }
          anonymous {
            id
            subCampus
            watermark
          }
          commentsWithRelay {
            totalCount
          }
          votesWithRelay {
            totalCount
            viewerHasUpvoted
            viewerCanUpvote
          }
        }
      }
    }
    users(first: $usersFirst, after: $usersAfter) {
      totalCount
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
      edges {
        node {
          id
          name
          avatarImageUrl
          createdAt
          credential {
            id
          }
        }
      }
    }
    subjects(first: $subjectsFirst, after: $subjectsAfter) {
      totalCount
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
      edges {
        node {
          id
          title
        }
      }
    }
    institutes(first: $institutesFirst, after: $institutesAfter) {
      totalCount
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
      edges {
        node {
          id
          name
        }
      }
    }
    subcampuses(first: $subcampusesFirst, after: $subcampusesAfter) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useUniversityQuery__
 *
 * To run a query within a React component, call `useUniversityQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniversityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniversityQuery({
 *   variables: {
 *      id: // value for 'id'
 *      institutesFirst: // value for 'institutesFirst'
 *      institutesAfter: // value for 'institutesAfter'
 *      subcampusesFirst: // value for 'subcampusesFirst'
 *      subcampusesAfter: // value for 'subcampusesAfter'
 *      subjectsFirst: // value for 'subjectsFirst'
 *      subjectsAfter: // value for 'subjectsAfter'
 *      usersFirst: // value for 'usersFirst'
 *      usersAfter: // value for 'usersAfter'
 *      postsFirst: // value for 'postsFirst'
 *      postsAfter: // value for 'postsAfter'
 *   },
 * });
 */
export function useUniversityQuery(baseOptions: Apollo.QueryHookOptions<UniversityQuery, UniversityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UniversityQuery, UniversityQueryVariables>(UniversityDocument, options);
      }
export function useUniversityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniversityQuery, UniversityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UniversityQuery, UniversityQueryVariables>(UniversityDocument, options);
        }
export type UniversityQueryHookResult = ReturnType<typeof useUniversityQuery>;
export type UniversityLazyQueryHookResult = ReturnType<typeof useUniversityLazyQuery>;
export type UniversityQueryResult = Apollo.QueryResult<UniversityQuery, UniversityQueryVariables>;
export const CreateUniversityDocument = gql`
    mutation createUniversity($name: String!, $logoUrl: String!) {
  createUniversity(name: $name, logoUrl: $logoUrl) {
    id
    name
  }
}
    `;
export type CreateUniversityMutationFn = Apollo.MutationFunction<CreateUniversityMutation, CreateUniversityMutationVariables>;

/**
 * __useCreateUniversityMutation__
 *
 * To run a mutation, you first call `useCreateUniversityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUniversityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUniversityMutation, { data, loading, error }] = useCreateUniversityMutation({
 *   variables: {
 *      name: // value for 'name'
 *      logoUrl: // value for 'logoUrl'
 *   },
 * });
 */
export function useCreateUniversityMutation(baseOptions?: Apollo.MutationHookOptions<CreateUniversityMutation, CreateUniversityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUniversityMutation, CreateUniversityMutationVariables>(CreateUniversityDocument, options);
      }
export type CreateUniversityMutationHookResult = ReturnType<typeof useCreateUniversityMutation>;
export type CreateUniversityMutationResult = Apollo.MutationResult<CreateUniversityMutation>;
export type CreateUniversityMutationOptions = Apollo.BaseMutationOptions<CreateUniversityMutation, CreateUniversityMutationVariables>;
export const UserautheninfosDocument = gql`
    query userautheninfos($first: Int, $after: String) {
  userAuthenInfos(first: $first, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      startCursor
      endCursor
      hasPreviousPage
    }
    edges {
      node {
        id
        avatarImageUrl
        to {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useUserautheninfosQuery__
 *
 * To run a query within a React component, call `useUserautheninfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserautheninfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserautheninfosQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserautheninfosQuery(baseOptions?: Apollo.QueryHookOptions<UserautheninfosQuery, UserautheninfosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserautheninfosQuery, UserautheninfosQueryVariables>(UserautheninfosDocument, options);
      }
export function useUserautheninfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserautheninfosQuery, UserautheninfosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserautheninfosQuery, UserautheninfosQueryVariables>(UserautheninfosDocument, options);
        }
export type UserautheninfosQueryHookResult = ReturnType<typeof useUserautheninfosQuery>;
export type UserautheninfosLazyQueryHookResult = ReturnType<typeof useUserautheninfosLazyQuery>;
export type UserautheninfosQueryResult = Apollo.QueryResult<UserautheninfosQuery, UserautheninfosQueryVariables>;
export const UsersDocument = gql`
    query Users($first: Int, $after: String) {
  usersWithRelay(first: $first, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        createdAt
        avatarImageUrl
        credential {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const WhoAmIDocument = gql`
    query whoAmI {
  whoAmI {
    ... on User {
      id
      name
      createdAt
      lastLoginedAt
      userId
      avatarImageUrl
    }
    ... on Admin {
      id
      name
      createdAt
      lastLoginedAt
      userId
      avatarImageUrl
    }
  }
}
    `;

/**
 * __useWhoAmIQuery__
 *
 * To run a query within a React component, call `useWhoAmIQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmIQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmIQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmIQuery(baseOptions?: Apollo.QueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
      }
export function useWhoAmILazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
        }
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmIQueryResult = Apollo.QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;