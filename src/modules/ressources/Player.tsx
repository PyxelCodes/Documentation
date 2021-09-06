import { Table } from '../Table'

export const Player = () => {
  return (
    <>
      <h1> Player Structure </h1>
      <Table
        p={[
          ['_id', 'string', 'The Discord ID of the player'],
          ['gold', 'int64', 'The amount of gold the player has'],
          ['vault', 'int64', 'The amount of gold in the vault'],
          ['vaultLvl', 'uint8', 'The level of the vault 1-100'],
          ['farmLvl', 'uint8', 'The level of the farm 1-8'],
          ['freeStreak', 'int64', 'The streak of the player'],
          ['attack', 'int16', 'The cannon level 100-1090'],
          ['defense', 'int16', 'The wall level 100-1090'],
          [
            'commandsExecuted',
            'int64',
            'The amount of commands executed by the player',
          ],
          ['clan', 'string | null', 'The clan the user is in'],
          [
            'raidPreventUntil',
            'int64',
            'Date when the user will be raidable again',
          ],
          [
            'acceptingGifts',
            'bool',
            'Whether the player is accepting gifts or payments',
          ],
          ['lang', 'string', 'The language the player is using'],
          [
            'maxActiveCompanions',
            'int8',
            'The amount of companions the user can have active at the same time 1-5',
          ],
          ['joined', 'int64', 'The time the user started playing'],
          [
            'claimBucket',
            ['ClaimBucket', 'claimbucket'],
            'The claimable listings from the market',
          ],
          [
            'skills',
            ['objectkeys of Skill', 'skill'],
            'The SkillXP of the player',
          ],
          ['invites', ['Invite[]', 'invite'], 'Pending Clan invitations'],
          [
            'notifications',
            ['Notification', 'notification'],
            'The Notifications of the player',
          ],
          [
            'workshop',
            ['Workshop', 'workshop'],
            'The workshop levels of the player',
          ],
          [
            'inventory',
            '{ ...itemId: int16 }',
            'The inventory of the player, pretty self explanatory',
          ],
          ['skin', ['Skin', 'skin'], 'The skin of the player'],
          [
            'activeBoosters',
            ['ActiveBoosters', 'activeboosters'],
            'The active boosters of the player',
          ],
          ['farm', '{ string<int64>: string }', 'The farm of the player'],
          ['lastEvents', ['LastEvents', 'lastevents'], 'The last events of the player']
        ]}
      />
      <h1> Sub Structures </h1>
      <h3 id="claimbucket"> ClaimBucket </h3>
      <Table
        p={[
          ['incoming', 'int64', 'The amount of gold that is claimable'],
          [
            'listings',
            ['Listing[]', 'listing'],
            'All listings that got bought',
          ],
          ['completedListings', 'int64', 'The amount of listings bought'],
        ]}
      />
      <h3 id="listing"> Listing </h3>
      <Table
        p={[
          ['price', 'int32', 'The price of the item'],
          ['amount', 'int32', 'The amount of the item bought'],
          ['itemId', 'string', 'The ID of the item'],
          ['recID', 'string', 'The ID of the user who bought the listing'],
        ]}
      />
      <h3 id="skill"> Skill </h3>
      <Table
        p={[
          ['skillId', 'string', 'the name of the skill'],
          ['xp', 'int64', 'The xp of the skill'],
        ]}
      />

      <h3 id="invite"> Invite </h3>
      <Table
        p={[
          ['clan', 'string', 'The id of the clan'],
          ['invitedBy', 'string', 'The ID of the user who invited them'],
          ['date', 'int64', 'The time when the user got invited'],
        ]}
      />

      <h3 id="notification"> Notification </h3>
      <Table
        p={[
          ['farm', 'bool', 'Whether the user gets farm notifications'],
          ['daily', 'bool', 'Whether the user gets daily notifications'],
          ['raids', 'bool', 'Whether the user gets raid notifications'],
          ['gifts', 'bool', 'Whether the user gets gift notifications'],
          ['market', 'bool', 'Whether the user gets market notifications'],
        ]}
      />
      <h3 id="workshop"> Workshop </h3>
      <Table
        p={[
          ['carpenter', 'int8', 'Level of the carpenter 0-5'],
          ['blacksmith', 'int8', 'Level of the blacksmith'],
          ['chef', 'int8', 'Level of the chef'],
        ]}
      />
      <h3 id="skin"> Skin </h3>
      <Table
        p={[
          ['active', 'string', 'The skin in use'],
          ['owned', 'string[]', 'all owned skins'],
        ]}
      />

      <h3 id="activeboosters"> ActiveBoosters </h3>
      <Table
        p={[
          ['coinBooster?', ['Booster', 'booster'], 'the coinbooster stats'],
          [
            'bigCoinBooster?',
            ['Booster', 'booster'],
            'the BigCoinbooster stats',
          ],
        ]}
      />
      <h3 id="booster"> Booster </h3>
      <Table
        p={[
          ['timeUsed', 'int64', 'The time the booster was used at'],
          ['duration', 'int32', 'The duration of the Booster'],
          ['multiplier', 'int16', 'The multiplier the Booster adds'],
        ]}
      />
      <h3 id="lastevents"> LastEvents </h3>
      <Table p={[
          ['command', 'int64', 'The time when the last command was executed'],
          ['daily', 'int64', 'The last time daily was collected'],
          ['free', 'int64', 'The last time free was collected'],
          ['fish', 'int64', 'The last time the player fished'],
          ['forage', 'int64', 'The last time the player foraged'],
          ['raided', 'int64', 'The last time the player was raided'],
          ['weekly', 'int64', 'The last time the player collected weekly'],
          ['voted', 'int64', 'The last time the player voted']
      ]}/>
    </>
  )
}
