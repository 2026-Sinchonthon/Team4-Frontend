const PROFILE_IMAGES_KEY = 'sinchonthon.profileImages'

export function loadProfileImages(defaults) {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PROFILE_IMAGES_KEY) || '{}')
    return {
      cover: saved.cover || defaults.cover,
      profile: saved.profile || defaults.profile,
    }
  } catch {
    return defaults
  }
}

export function saveProfileImages(images) {
  window.localStorage.setItem(PROFILE_IMAGES_KEY, JSON.stringify(images))
}

export function readImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('이미지 파일만 선택할 수 있어요.'))
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      reject(new Error('5MB 이하의 이미지를 선택해 주세요.'))
      return
    }

    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('이미지를 불러오지 못했어요. 다시 시도해 주세요.'))
    reader.readAsDataURL(file)
  })
}
