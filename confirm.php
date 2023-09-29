<form action="submit.php" method="post">
  <dl>
    <dt><label for="name">▼お名前</label></dt>
    <dd><?php print(htmlspecialchars($_POST['name'], ENT_QUOTES)); ?></dd>
    <dt><label for="mail">▼メールアドレス</label></dt>
    <dd><?php print(htmlspecialchars($_POST['mail'], ENT_QUOTES)); ?></dd>
    <dt><label for="contents">▼内容</label></dt>
    <dd><?php print(htmlspecialchars($_POST['contents'], ENT_QUOTES)); ?></dd>
  </dl>
  <button type="submit">送信</button>
  <a href="contact.html"><button type="button">戻る</button></a>

  <input type="hidden" name="name" value="<?php print(htmlspecialchars($_POST['name'], ENT_QUOTES)); ?>">
  <input type="hidden" name="mail" value="<?php print(htmlspecialchars($_POST['mail'], ENT_QUOTES)); ?>">
  <input type="hidden" name="contents" value="<?php print(htmlspecialchars($_POST['contents'], ENT_QUOTES)); ?>">
</form>