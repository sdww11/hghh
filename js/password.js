// 密码保护功能

/**
 * 检查是否设置了密码保护
 * 通过读取页面上嵌入的环境变量来检查
 */
function isPasswordProtected() {
    // 只检查普通密码
    const pwd = window.__ENV__ && window.__ENV__.PASSWORD;
    
    // 检查普通密码是否有效
    return typeof pwd === 'string' && pwd.length === 64 && !/^0+$/.test(pwd);
}

/**
 * 检查是否强制要求设置密码
 * 如果没有设置有效的 PASSWORD，则认为需要强制设置密码
 * 为了安全考虑，所有部署都必须设置密码
 */
function isPasswordRequired() {
    return !isPasswordProtected();
}
