groups:
    - docker

users:
    - name: ${user}
      groups: docker
      lock_passwd: true
      sudo: 'ALL=(ALL) NOPASSWD: ALL'
      shell: /bin/bash
      ssh_authorized_keys:
        - '${ssh_pubkey}'

apt:
    preserve_sources_list: true
    sources:
        glusterfs:
            source: "ppa:gluster/glusterfs-7"
        docker:
            source: "deb https://download.docker.com/linux/ubuntu $RELEASE stable"
            keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88

packages:
    - fail2ban
    - glusterfs-server
    - rclone
    - jq
    - [docker-ce, ${docker_version}]

snap:
    commands:
        - [ 'install', 'yq' ]
