import axios from 'axios'

// 创建axios实例
const http = axios.create({
  // baseURL: 'http://maybe.dpwgc.link:9000',
  baseURL: '/web',
  timeout: 3000,
  headers: {'Content-Type': 'multipart/form-data'}
})

// 按分类获取知识
export const getNodes = (id, queryInfo) => {
  const form = new FormData()
  if (!queryInfo) {
    form.append('startPage', 0)
    form.append('endPage', 2000)
  } else {
    form.append('startPage', queryInfo.startPage)
    form.append('endPage', queryInfo.endPage)
  }
  form.append('classId', id)
  return http.post('/Knowledge/listKnowledge', form)
}

// 获取知识的联系
export const getNodesRelative = id => {
  const form = new FormData()
  form.append('classId', id)
  return http.post('/Relation/listRelation', form)
}

// 按名称查找知识
export const getNode = node => {
  const form = new FormData()
  form.append('knowledgeName', node.knowledgeName)
  form.append('startPage', node.startPage)
  form.append('endPage', node.endPage)
  return http.post('/Knowledge/queryKnowledgeByName', form)
}

// 按关键字查找知识
export const queryNode = node => {
  const form = new FormData()
  form.append('knowledgeKeyword', node.knowledgeKeyword)
  form.append('startPage', node.startPage)
  form.append('endPage', node.endPage)
  return http.post('/Knowledge/queryKnowledgeByKeyword', form)
}

// 插入知识
export const insertNode = node => {
  const form = new FormData()
  form.append('classId', node.classId)
  form.append('knowledgeName', node.knowledgeName)
  form.append('knowledgeContent', node.knowledgeContent)
  form.append('size', node.size)
  form.append('color', node.color)
  return http.post('/Knowledge/insertKnowledge', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 获取知识分类
export const getCategoies = () => {
  const form = new FormData()
  form.append('startPage', 0)
  form.append('endPage', 2000)
  return http.post('/Class/listClass', form)
}

// 按id删除知识
export const deleteNode = id => {
  const form = new FormData()
  form.append('id', id)
  return http.post('/Knowledge/deleKnowledge', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 更新知识信息
export const updateNode = node => {
  const form = new FormData()
  form.append('id', node.id)
  form.append('classId', node.classId)
  form.append('knowledgeName', node.knowledgeName)
  form.append('knowledgeContent', node.knowledgeContent)
  form.append('size', node.size)
  form.append('knowledgeTag', node.knowledgeTag)
  form.append('color', node.color)
  return http.post('/Knowledge/updateKnowledge', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 建立知识联系
export const insertRelative = node => {
  const form = new FormData()
  form.append('fatherId', node.fatherId)
  form.append('sonId', node.sonId)
  return http.post('/Relation/insertRelation', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 删除知识联系
export const deleteLink = id => {
  const form = new FormData()
  form.append('id', id)
  return http.post('/Relation/deleRelation', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 获取标签列表
export const getTagsList = () => {
  const form = new FormData()
  form.append('classId', 0)
  return http.post('/Tag/listTag', form)
}

// 修改知识分类
export const updateCate = cate => {
  const form = new FormData()
  form.append('id', cate.id)
  form.append('className', cate.className)
  form.append('classContent', cate.classContent)
  return http.post('/Class/updateClass', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 删除知识分类
export const deleteCate = cateId => {
  const form = new FormData()
  form.append('id', cateId)
  return http.post('/Class/deleClass', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 添加知识分类
export const insertCate = cate => {
  const form = new FormData()
  form.append('className', cate.className)
  form.append('classContent', cate.classContent)
  return http.post('/Class/insertClass', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 用户登录
export const login = user => {
  const form = new FormData()
  form.append('code', user.code)
  form.append('password', user.password)
  return http.post('/User/login', form)
}

// 用户注册
export const register = user => {
  const form = new FormData()
  form.append('username', user.username)
  form.append('password', user.password)
  form.append('img', null)
  return http.post('/User/insertUser', form)
}

// 用户修改密码
export const updatePassword = user => {
  const form = new FormData()
  form.append('id', user.id)
  form.append('newPassword', user.newPassword)
  form.append('oldPassword', user.oldPassword)
  return http.post('/User/updatePassword', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 收藏知识
export const insertLove = (knowledgeId) => {
  const form = new FormData()
  form.append('knowledgeId', knowledgeId)
  form.append('userId', window.sessionStorage.id)
  return http.post('/Love/insertLove', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 获取用户收藏的知识
export const listUserLove = () => {
  const form = new FormData()
  form.append('userId', window.sessionStorage.id)
  form.append('startPage', 0)
  form.append('endPage', 20)
  return http.post('/Love/listUserLove', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}

// 上传图片
export const uploadFile = img => {
  const form = new FormData()
  form.append('file', img)
  form.append('type', img.type)
  return http.post('/Upload/uploadFile', form)
}

// 修改用户头像
export const updateUser = userForm => {
  const form = new FormData()
  form.append('id', userForm.id)
  form.append('img', userForm.img)
  return http.post('/User/updateUser', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'code': window.sessionStorage.code,
      'token': window.sessionStorage.token
    }
  })
}
