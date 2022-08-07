<script lang="ts">

</script>

<div class="main">
    <div class="contacts">
        telegram <a href="https://t.me/saphielle">@saphielle</a> | camellia.sialiss@gmail.com
    </div>
    <div class="menu" id="navigation">
        <a href="#navigation" class="link highlighted">About me</a>
        <a href="/frontend" class="link">Frontend</a>
        <a href="/gamedev" class="link">Gamedev</a>
    </div>
</div>


<style>
	.menu {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: column;
        border-top: 2px solid #ff3d3d;
        border-bottom: 2px solid #ff3d3d;
	}

    .main {
        display: grid;
    }

    .contacts {
        text-align: right;
        padding: 0.7em;
        padding-top: 0;
    }

    .link {
        padding: 0.1em;
        margin-top: -2px;
        margin-bottom: -2px;
		color: #ff3d3d;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

    .highlighted {
        background-color: #ff3d3d;
        color: white;
        text-decoration: underline 2px;
    }
</style>