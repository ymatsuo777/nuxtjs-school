<template>
  <div>
    <div class="title">
      <!-- computed（算出プロパティ）の内容を表示 -->
      {{ pageTitle }}
    </div>
    <!-- dataで定義した変数の内容を表示 -->
    {{ loginUser }}

    <!-- dataで定義したusers（配列）の数分ループを回す => v-forの使用 -->
    <!-- keyにはループによって生成されたHTMLに一意のキーを設定する必要がある -->
    <!-- これは変数の内容が変更された場合等に再レンダリングが行われる場合のターゲットの識別に利用され -->
    <!-- 付けないとパフォーマンス上の影響が出る場合がある -->
    <div v-for="u in users" :key="u.no" class="list">
      <!-- UserItemコンポーネントの利用 -->
      <!-- usersのnoとnameをコンポーネントに渡している -->
      <UserItem :no="u.no" :name="u.name" />
    </div>

    <!-- @click ･･･ クリックした場合の処理を設定する（その他 @blur, @dbclickなどなど） -->
    <button @click="changeData">
      ボタン
    </button>

    <br>
    <br>
    <br>
    <div>
      データ取得サンプル
    </div>

    <div v-for="u in usersByHttp" :key="u.no" class="list">
      <UserItem :no="u.no" :name="u.name" />
    </div>

    <button @click="getData">
      ボタン
    </button>
  </div>
</template>

<script>
// この画面で使用するコンポーネントなどをインポートする
import UserItem from '@/components/sample/UserItem'

export default {
  // この画面で使用するコンポーネントを設定する
  components: {
    UserItem
  },
  // この画面で使用する変数を定義する
  data() {
    return {
      loginUser: '',
      users: [],
      usersByHttp: []
    }
  },
  // 算出プロパティ
  // 既存のデータに対して何らかの処理をした結果をデータとして返す
  computed: {
    pageTitle() {
      return `[ ${this.$store.state.sample.pageTitle} ]`
    }
  },
  // ライフサイクルフック
  // https://jp.vuejs.org/v2/guide/instance.html#ライフサイクルダイアグラム
  // https://ja.nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle/
  // created ･･･ インスタンスが生成された後にコードを実行
  created() {
    // storeのsetPageTitleを呼び出し、ページタイトルを設定する
    this.$store.commit('sample/setPageTitle', 'ユーザー一覧')

    this.loginUser = 'サンプルユーザー'

    this.users.push({
      no: 1,
      name: '田中'
    })
    this.users.push({
      no: 2,
      name: '山田'
    })
  },
  // この画面で使用する処理を定義する
  methods: {
    // 関数
    changeData() {
      const idx = this.users.length
      this.users.push({
        no: idx + 1,
        name: '追加されたデータ'
      })
    },

    async getData() {
      await this.$axios
        .post('/')
        .then(response => {
          this.usersByHttp.push(...response.data)
        })
        .catch(err => {
          alert(`Error!! : ${err}`)
        })
    }
  }
}
</script>

<style scoped>
/* デザインの定義 普通のCSSが使用できる */
.title {
  font-weight: bold;
}

.list {
  margin: 10px;
}
</style>
